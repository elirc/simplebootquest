---
slug: "deploy-p-cache-control"
title: "Practice: Cache Headers for a Deployed SPA"
type: "code"
language: "js"
xp: 15
resources: [{"title": "MDN: Cache-Control", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"}, {"title": "web.dev: HTTP caching", "url": "https://web.dev/articles/http-cache"}]
---
# Practice: Cache Headers for a Deployed SPA

After `vite build`, your `dist/` folder has two kinds of files:
- **Hashed assets** like `assets/index-3f9a1c.js`: the filename changes whenever the content does, so they can be cached **forever**.
- **`index.html`**: it references the current hashes, so it must **always be revalidated**. If a stale `index.html` is cached, users load old JavaScript after a deploy.

API responses usually shouldn't be cached by shared caches at all.

## Your task
Write `cacheControlFor(path)` returning the `Cache-Control` value:
- Paths starting with `/api/` → `'no-store'`
- `/` and any path ending in `.html` → `'no-cache'` (cache it, but revalidate every time)
- Files under `/assets/` with a content hash in the name (a `-` or `.` followed by 8 or more hex-or-base64url characters right before the extension, e.g. `index-3f9a1c2b.js` or `logo.BxK9_aZ1.svg`) → `'public, max-age=31536000, immutable'`
- Other static files (`/favicon.ico`, `/robots.txt`, unhashed assets) → `'public, max-age=3600'`
- SPA routes with no extension (`/todos/42`) serve `index.html`, so they get `'no-cache'` too.
