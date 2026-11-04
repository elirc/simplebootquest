---
slug: "express-project-url-shortener"
title: "Project: URL Shortener API"
type: "project"
xp: 100
requirements: ["Express 5 + TypeScript, with createApp() separated from listen()", "POST /api/links validates the URL (http/https only) with Zod and returns 201 with the code and short URL", "Optional custom alias (3–30 chars, [a-zA-Z0-9-]); duplicates return 409", "GET /:code redirects with 302 and increments a click counter; unknown codes return 404", "GET /api/links/:code/stats returns clicks and createdAt", "Rate limiting on link creation", "At least 6 Supertest tests, including the redirect and a validation failure", "README answering the design questions above"]
---
# Project: URL Shortener API

A classic warm-up project that touches validation, status codes, redirects and some light algorithms.

```http
POST /api/links        { "url": "https://example.com/very/long" }
→ 201 { "code": "aZ3k9Q", "url": "https://example.com/very/long", "shortUrl": "http://localhost:3000/aZ3k9Q" }

GET /aZ3k9Q
→ 302 Location: https://example.com/very/long

GET /api/links/aZ3k9Q/stats
→ 200 { "clicks": 12, "createdAt": "..." }
```

## Design questions to answer in your README

- How do you generate short codes? Random characters vs. base62-encoded counters: what are the trade-offs?
- What happens on a collision?
- Why `302` rather than `301` for the redirect? (Hint: caching and click counting.)
- How would you prevent people using your shortener to hide phishing links?

Submit your repository URL when you're done.
