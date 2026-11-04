---
slug: "sd-http-caching-cdn"
title: "HTTP Caching & CDNs"
type: "quiz"
xp: 15
resources: [{"title": "MDN: HTTP caching", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"}, {"title": "web.dev: Love your cache", "url": "https://web.dev/articles/love-your-cache"}]
questions: [{"prompt": "Why can `main.3f9a1c.js` be cached for a year?", "options": ["Browsers ignore max-age", "The content hash changes whenever the file changes, so old URLs are never reused", "CDNs require it"], "answer": 1}, {"prompt": "What should index.html usually have?", "options": ["max-age=31536000", "no-cache (revalidate every time) so new deploys appear", "no caching headers at all"], "answer": 1}, {"prompt": "What is the danger of `Cache-Control: public` on `/api/me`?", "options": ["Slower responses", "A CDN could serve one user's private data to other users", "None"], "answer": 1}, {"prompt": "What does stale-while-revalidate do?", "options": ["Deletes stale content", "Serves the cached copy while fetching a fresh one in the background", "Forces a refresh on every request"], "answer": 1}, {"prompt": "What is the role of the Vary header?", "options": ["Compression", "Telling caches which request headers change the response, so they store separate variants", "Authentication"], "answer": 1}]
---
# HTTP Caching & CDNs

The cheapest request never reaches your server. HTTP caching happens in the **browser** and in **CDNs** (Cloudflare, Fastly, CloudFront) that sit between users and your app.

| Content | Cache-Control |
|---------|---------------|
| Hashed build assets (`main.3f9a1c.js`) | `public, max-age=31536000, immutable` |
| `index.html` | `no-cache` (always revalidate, so new deploys show up) |
| Public API data (a recipe page) | `public, max-age=60, stale-while-revalidate=300` |
| Private API data (`/api/me`) | `private, no-store` |

Vite puts a content hash in asset filenames, so they can be cached "forever": a new deploy means new filenames.

### CDN gotchas

- **Never cache personalised responses publicly.** `Cache-Control: public` on `/api/me` could serve one user's data to another!
- Cookies usually make a response uncacheable at the CDN. That's a good default.
- `Vary: Accept-Encoding` (or `Vary: Accept-Language`) tells caches which request headers change the response.
- Purge APIs let you invalidate CDN content on demand. Use them sparingly, and prefer versioned URLs.
