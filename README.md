
[![Netlify Status](https://api.netlify.com/api/v1/badges/88c52a75-c67e-490d-b2be-62aa37f93c0c/deploy-status)](https://app.netlify.com/sites/mrinaljain/deploys)


 Passionate about bridging engineering with education to empower teams and drive product impact.

## Theme System (Light, Dark, System)

This project now supports 3 theme modes across the website:

- `light`
- `dark`
- `system` (matches the OS/browser preference)

Theme state is handled with `next-themes`, persisted in local storage, and applied with a class-based strategy (`class="dark"`) for Tailwind CSS v4.

## How It Works

1. `ThemeProvider` wraps the app in `src/app/layout.tsx`.
2. Tailwind dark variant is enabled in `src/app/globals.css` using:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

3. CSS tokens switch by class:

```css
:root {
	--background: #ffffff;
	--foreground: #171717;
}

.dark {
	--background: #0a0a0a;
	--foreground: #ededed;
}
```

4. `ThemeToggle` in the header lets users select `light`, `dark`, or `system` dynamically.

## How To Write Theme-Safe Classes (For Future Work)

Use Tailwind utility pairs where needed:

- Backgrounds: `bg-white dark:bg-slate-900`
- Text: `text-slate-900 dark:text-slate-100`
- Borders: `border-slate-200 dark:border-slate-700`
- Secondary text: `text-slate-600 dark:text-slate-300`

Examples:

```tsx
<div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
	<h2 className="text-slate-900 dark:text-slate-100">Title</h2>
	<p className="text-slate-600 dark:text-slate-300">Description</p>
</div>
```

```tsx
<button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
	Action
</button>
```

## Rules To Keep Theme Support Stable

- Always provide a `dark:` counterpart for non-brand neutral colors.
- Prefer semantic color families (`slate`, `neutral`) for text/surface in content-heavy areas.
- Keep brand CTA colors consistent unless there is a contrast issue.
- For reusable sections with many custom colors (like resume), use CSS variables and override them under `.dark`.
- Avoid relying only on `prefers-color-scheme`; user choice from toggle should take priority.

## Files Added/Updated For Theming

- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- Shared page/component styles updated with `dark:` variants
- Resume styles converted to variable-based theme tokens in `src/components/resume/Resume.css`

## References Used

- https://dev.to/khanrabiul/nextjs-tailwindcss-v4-how-to-add-darklight-theme-with-next-themes-3c6l
- https://medium.com/@aashekmahmud/implementing-dark-and-light-mode-themes-in-next-js-a-comprehensive-guide-bf2c34ecd50d

## Linting

This project uses the ESLint CLI with a Next.js 16 flat config.

- `npm run lint` runs ESLint across the project.
- `npm run lint:fix` applies safe autofixes.
- `npm run lint:strict` fails on any warning.

The config includes:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- the recommended rule sets from `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `@next/eslint-plugin-next`
- `eslint-config-prettier/flat` to avoid formatter conflicts

## IndexNow Setup

This project includes a script to submit URLs from your sitemap to IndexNow.

### 1) Add environment variables

Copy values from `.env.example` into your local `.env.local` (and production env on your host):

- `NEXT_PUBLIC_SITE_URL`
- `INDEXNOW_KEY`
- `INDEXNOW_KEY_LOCATION` (optional)
- `INDEXNOW_SITEMAP_URL` (optional)
- `INDEXNOW_ENDPOINT` (optional)

### 2) Prove site ownership (required by IndexNow)

Create a text file in `public/` named exactly `{INDEXNOW_KEY}.txt`.
The file content must be only your key.

Example:

- file path: `public/f34f184d10c049ef99aa7637cdc4ef04.txt`
- file content: `f34f184d10c049ef99aa7637cdc4ef04`

After deploy, verify:

- `https://<your-domain>/<INDEXNOW_KEY>.txt` returns the key text.

### 3) Submit URLs

Submit all URLs from sitemap:

```bash
npm run indexnow:submit:all
```

Submit URLs changed after a date:

```bash
npm run indexnow:submit -- --since=2026-01-01
```

Submit one URL:

```bash
npm run indexnow:submit -- --url=https://<your-domain>/post/example
```

Dry run (prepare URLs only, no API call):

```bash
npm run indexnow:submit -- --all --dry-run
```

Notes:

- IndexNow accepts up to 10,000 URLs per request. The script auto-batches.
- Non-200/202 responses fail the command so you can retry or debug quickly.

### 4) GitHub Actions automation (optional)

Workflow file:

- `.github/workflows/indexnow-submit.yml`

Add these GitHub Actions repository secrets:

- `NEXT_PUBLIC_SITE_URL` (required)
- `INDEXNOW_KEY` (required)
- `INDEXNOW_KEY_LOCATION` (optional)
- `INDEXNOW_SITEMAP_URL` (optional)
- `INDEXNOW_ENDPOINT` (optional)

What it does:

- Runs daily on a schedule (UTC).
- Supports manual runs with `all`, `since`, or `url` mode.
- Verifies sitemap and key file are reachable before submitting.

Manual run from GitHub UI:

1. Open **Actions** -> **IndexNow Submit** -> **Run workflow**.
2. Choose `all` to submit all sitemap URLs.
3. Choose `since` to submit URLs changed after a date (`YYYY-MM-DD`).
4. Choose `url` to submit one URL.
5. Optionally enable `dry_run` to validate without calling IndexNow.
