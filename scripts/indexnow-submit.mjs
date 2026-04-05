#!/usr/bin/env node

const MAX_URLS_PER_REQUEST = 10000;
const DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow";

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

async function fetchText(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
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

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();

  return {
    status: response.status,
    statusText: response.statusText,
    body,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const baseUrlRaw = getEnv("NEXT_PUBLIC_SITE_URL", true);
  const key = getEnv("INDEXNOW_KEY", true);

  const baseUrl = normalizeBaseUrl(baseUrlRaw);
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
  console.error(`[error] ${error.message}`);
  process.exit(1);
});
