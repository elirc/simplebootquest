---
slug: "sd-q-static-and-cdn"
title: "Offloading Work to the Edge"
type: "quiz"
xp: 15
questions: [{"prompt": "Where should the built React bundle be served from in production?", "options": ["From Express with no caching", "From a CDN or object storage, with long cache lifetimes for hashed files", "From the database"], "answer": 1}, {"prompt": "What does a pre-signed upload URL let you do?", "options": ["Skip authentication", "Let the browser upload directly to object storage, for a limited time and a specific key, without the file passing through your API", "Encrypt the file"], "answer": 1}, {"prompt": "Which response is a reasonable candidate for CDN caching?", "options": ["GET /api/me", "A public recipe page that changes rarely", "POST /api/orders"], "answer": 1}, {"prompt": "What does `s-maxage` control?", "options": ["Browser cache only", "How long shared caches (CDNs and proxies) may cache the response", "Session length"], "answer": 1}, {"prompt": "Why must index.html not be cached for long?", "options": ["It is too large", "It references the current asset hashes, so a stale copy loads old JavaScript after a deploy", "Browsers forbid it"], "answer": 1}]
---
# Offloading Work to the Edge

The cheapest request is the one your servers never see.

- **Static assets** (the built React app, images, fonts) should be served by a **CDN** or object storage, not by Node. A CDN has servers near users, caches aggressively, and handles TLS and compression.
- **Hashed filenames** (`index-3f9a1c.js`) can be cached for a year. `index.html` must be revalidated.
- **Public, rarely changing API responses** (a list of countries, a public recipe page) can be cached at the CDN for a short time with `Cache-Control: public, s-maxage=60`.
- **Uploads** can go straight from the browser to object storage with a **pre-signed URL**, so large files never pass through your API.
- **Compression** (gzip/brotli) and **HTTP/2** cut load time for free.

Moving these off the API often removes the need to scale the API at all.
