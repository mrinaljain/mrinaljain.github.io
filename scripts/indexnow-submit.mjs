#!/usr/bin/env node

import fs from "node:fs";
import http from "node:http";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Load environment variables from .env files
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const [key, ...valueParts] = trimmed.split("=");
    if (!key) continue;

    const value = valueParts.join("=").trim();
    // Only set if not already in process.env
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

// Load .env files in order of precedence for IndexNow usage:
// .env -> .env.production -> .env.local
// We intentionally load production before local so submissions always target prod.
loadEnvFile(path.join(projectRoot, ".env"));
loadEnvFile(path.join(projectRoot, ".env.production"));
loadEnvFile(path.join(projectRoot, ".env.local"));

const MAX_URLS_PER_REQUEST = 100;
const DEFAULT_ENDPOINT = "https://api.indexnow.org";
const DEFAULT_CA_FILE = path.join(projectRoot, "certs", "local-root-ca.pem");

function parseArgs(argv) {
  const args = {
    since: null,
    all: false,
    url: null,
    dryRun: false,
  };

  for (const arg of argv) {
    if (arg === "--all") {
      args.all = true;
      continue;
    }

    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }

    if (arg.startsWith("--since=")) {
      args.since = arg.slice("--since=".length);
      continue;
    }

    if (arg.startsWith("--url=")) {
      args.url = arg.slice("--url=".length);
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    console.warn(`[warn] Unknown argument ignored: ${arg}`);
  }

  return args;
}

function printHelp() {
  console.log(`IndexNow submission script

Usage:
  npm run indexnow:submit -- --all
  npm run indexnow:submit -- --since=2026-01-01
  npm run indexnow:submit -- --url=https://example.com/post/my-new-page
  npm run indexnow:submit -- --all --dry-run

Environment variables:
  NEXT_PUBLIC_SITE_URL   Base site URL, e.g. https://mrinaljain.com
  INDEXNOW_KEY           IndexNow API key (required)
  INDEXNOW_KEY_LOCATION  Optional key file URL (default: <site>/<key>.txt)
  INDEXNOW_SITEMAP_URL   Optional sitemap URL (default: <site>/sitemap.xml)
  INDEXNOW_ENDPOINT      Optional endpoint (default: https://api.indexnow.org/indexnow)
`);
}

function getEnv(name, required = false) {
  const value = process.env[name]?.trim();
  if (required && !value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeBaseUrl(input) {
  const baseUrl = new URL(input);
  return baseUrl.toString().replace(/\/$/, "");
}

function assertProductionBaseUrl(input) {
  const parsed = new URL(input);
  const hostname = parsed.hostname.toLowerCase();

  const isLocalHost =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "0.0.0.0" ||
    hostname.endsWith(".local");

  if (parsed.protocol !== "https:" || isLocalHost) {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be a production HTTPS URL (got: ${input}).`
    );
  }
}

function validateSinceDate(sinceArg) {
  if (!sinceArg) return null;

  const date = new Date(sinceArg);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid --since value: ${sinceArg}. Use YYYY-MM-DD.`);
  }

  return date;
}

function parseSitemap(xml) {
  const urlBlocks = xml.match(/<url>([\s\S]*?)<\/url>/gi) ?? [];

  return urlBlocks
    .map((block) => {
      const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/i);
      const lastModMatch = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/i);

      if (!locMatch?.[1]) {
        return null;
      }

      const loc = locMatch[1].trim();
      const lastmod = lastModMatch?.[1]?.trim() ?? null;
      return { loc, lastmod };
    })
    .filter(Boolean);
}

function filterSitemapUrls(entries, sinceDate) {
  if (!sinceDate) {
    return entries.map((entry) => entry.loc);
  }

  return entries
    .filter((entry) => {
      if (!entry.lastmod) {
        return true;
      }

      const parsed = new Date(entry.lastmod);
      if (Number.isNaN(parsed.getTime())) {
        return true;
      }

      return parsed > sinceDate;
    })
    .map((entry) => entry.loc);
}

function chunk(array, size) {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

function getRequestOptions(url, method, headers = {}, body = "") {
  const parsed = new URL(url);
  const isHttps = parsed.protocol === "https:";

  const caFilePath = process.env.INDEXNOW_CA_FILE?.trim() || DEFAULT_CA_FILE;
  const ca = isHttps && fs.existsSync(caFilePath) ? fs.readFileSync(caFilePath, "utf-8") : undefined;

  return {
    protocol: parsed.protocol,
    hostname: parsed.hostname,
    port: parsed.port || (isHttps ? 443 : 80),
    path: `${parsed.pathname}${parsed.search}`,
    method,
    headers: {
      ...headers,
      ...(body ? { "Content-Length": Buffer.byteLength(body) } : {}),
    },
    ...(ca ? { ca } : {}),
  };
}

function requestText(url, method = "GET", headers = {}, body = "") {
  return new Promise((resolve, reject) => {
    const options = getRequestOptions(url, method, headers, body);
    const requester = options.protocol === "https:" ? https : http;

    const req = requester.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve({
          status: res.statusCode || 0,
          statusText: res.statusMessage || "",
          body: data,
        });
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    if (body) {
      req.write(body);
    }

    req.end();
  });
}

async function fetchText(url) {
  const response = await requestText(url, "GET");

  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.body;
}

function ensureUrlsBelongToHost(urls, host) {
  const valid = [];
  const rejected = [];

  for (const input of urls) {
    try {
      const url = new URL(input);
      if (url.host === host) {
        valid.push(url.toString());
      } else {
        rejected.push(input);
      }
    } catch {
      rejected.push(input);
    }
  }

  return { valid, rejected };
}

async function submitBatch({ endpoint, host, key, keyLocation, urlList }) {
  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  const bodyString = JSON.stringify(payload);
  const response = await requestText(
    endpoint,
    "POST",
    {
      "Content-Type": "application/json; charset=utf-8",
    },
    bodyString
  );

  return {
    status: response.status,
    statusText: response.statusText,
    body: response.body,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const baseUrlRaw = getEnv("NEXT_PUBLIC_SITE_URL", true);
  const key = getEnv("INDEXNOW_KEY", true);

  const baseUrl = normalizeBaseUrl(baseUrlRaw);
  assertProductionBaseUrl(baseUrl);
  const endpoint = getEnv("INDEXNOW_ENDPOINT") || DEFAULT_ENDPOINT;
  const sitemapUrl = getEnv("INDEXNOW_SITEMAP_URL") || `${baseUrl}/sitemap.xml`;
  const keyLocation = getEnv("INDEXNOW_KEY_LOCATION") || `${baseUrl}/${key}.txt`;

  const host = new URL(baseUrl).host;

  let urlsToSubmit = [];

  if (args.url) {
    urlsToSubmit = [args.url];
  } else {
    const sinceDate = args.all ? null : validateSinceDate(args.since);

    if (!args.all && !sinceDate) {
      throw new Error("Choose one mode: --all, --since=YYYY-MM-DD, or --url=https://...");
    }

    const sitemapXml = await fetchText(sitemapUrl);
    const sitemapEntries = parseSitemap(sitemapXml);
    urlsToSubmit = filterSitemapUrls(sitemapEntries, sinceDate);
  }

  const uniqueUrls = Array.from(new Set(urlsToSubmit));
  const { valid, rejected } = ensureUrlsBelongToHost(uniqueUrls, host);

  if (rejected.length > 0) {
    console.warn(`[warn] Skipped ${rejected.length} URL(s) not on host ${host} or invalid.`);
  }

  if (valid.length === 0) {
    console.log("[info] No valid URLs to submit.");
    return;
  }

  console.log(`[info] Prepared ${valid.length} URL(s) for IndexNow.`);

  if (args.dryRun) {
    console.log("[info] Dry run enabled. No requests were sent.");
    return;
  }

  const batches = chunk(valid, MAX_URLS_PER_REQUEST);

  for (let index = 0; index < batches.length; index += 1) {
    const batch = batches[index];
    const batchLabel = `${index + 1}/${batches.length}`;

    console.log(`[info] Submitting batch ${batchLabel} with ${batch.length} URL(s).`);

    const result = await submitBatch({
      endpoint,
      host,
      key,
      keyLocation,
      urlList: batch,
    });

    console.log(`[result] Batch ${batchLabel}: ${result.status} ${result.statusText}`);

    if (result.body) {
      console.log(`[result] Body: ${result.body}`);
    }

    if (![200, 202].includes(result.status)) {
      throw new Error(`IndexNow request failed for batch ${batchLabel}.`);
    }
  }

  console.log("[done] IndexNow submission completed.");
}

main().catch((error) => {
  const causeMessage = error?.cause?.message ? ` | cause: ${error.cause.message}` : "";
  console.error(`[error] ${error.message}${causeMessage}`);
  process.exit(1);
});
