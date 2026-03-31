
[![Netlify Status](https://api.netlify.com/api/v1/badges/88c52a75-c67e-490d-b2be-62aa37f93c0c/deploy-status)](https://app.netlify.com/sites/mrinaljain/deploys)

Passionate about bridging engineering with education to empower teams and drive product impact.

## Blog Implementation

A markdown-powered personal blog has been integrated in this project inspired by https://github.com/machadop1407/nextjs-markdown-blog and upgraded to modern Next.js App Router patterns.

### Routes

- /blog: blog listing page
- /blog/[slug]: blog details page
- /post: alias route to the same listing UI and data
- /post/[slug]: alias route to the same details UI and data

### Where Content Lives

Create markdown files in:

- src/content/blog

Each file name becomes the slug. Example:

- src/content/blog/my-awesome-post.md -> /blog/my-awesome-post

### Markdown Frontmatter

Each markdown file supports:

```md
---
title: "My First Post"
date: "2026-03-31"
excerpt: "A short summary for card previews"
tags:
  - nextjs
  - markdown
---

# Heading

Your markdown content here.
```

### Architecture

- src/lib/blog.ts: Server-side markdown loader, frontmatter parsing, sorting, and HTML transform
- src/types/blog.ts: Blog domain types
- src/components/blog/BlogList.tsx: Shared listing UI
- src/components/blog/BlogPostView.tsx: Shared article UI
- src/app/blog/page.tsx: Blog index route
- src/app/blog/[slug]/page.tsx: Blog article route with static params + metadata
- src/app/post/page.tsx and src/app/post/[slug]/page.tsx: Route aliases that reuse blog routes

### Key Next.js Features Used

- App Router route segments in src/app
- generateStaticParams for pre-rendering blog posts
- generateMetadata for per-post SEO metadata
- Server Components for file-system markdown loading

### Local Development

```bash
npm install
npm run dev
```

Then visit:

- http://localhost:3000/blog
- http://localhost:3000/post

### Adding New Posts

1. Add a new .md file under src/content/blog.
2. Fill frontmatter and markdown body.
3. Restart dev server only if file watchers are stale; usually hot reload picks it up.
4. Open /blog to verify ordering and rendering.
