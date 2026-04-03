
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
