---
slug: "sd-q-case-thumbnails"
title: "Case Study: Image Thumbnails"
type: "quiz"
xp: 15
resources: [{"title": "sharp: High-performance image processing", "url": "https://sharp.pixelplumbing.com/"}]
questions: [{"prompt": "Why upload directly to object storage instead of through the API?", "options": ["It is required by S3", "Large files do not tie up API instances, memory and bandwidth", "It is more secure by default"], "answer": 1}, {"prompt": "Why strip EXIF metadata from user photos?", "options": ["To save a few bytes only", "It can contain GPS coordinates and device information, which is a privacy risk", "Browsers cannot read it"], "answer": 1}, {"prompt": "How should the worker check that a file is really an image?", "options": ["By the file extension", "By decoding it with an image library (and rejecting failures)", "By the filename"], "answer": 1}, {"prompt": "Why store width and height with each image?", "options": ["For sorting", "So the page can reserve space and avoid layout shift while it loads", "For SEO only"], "answer": 1}, {"prompt": "What does srcset let the browser do?", "options": ["Encrypt images", "Pick the most appropriate size for the screen, saving bandwidth on phones", "Lazy-load scripts"], "answer": 1}]
---
# Case Study: Image Thumbnails

**Problem**: users upload photos (up to 20 MB) that appear in feeds at 3 sizes. Uploads must be fast, feeds must load quickly on phones, and abuse (huge files, non-images) must be contained.

**Design**:
1. **Direct upload**: the API issues a pre-signed URL with a size limit and content type, and the browser uploads straight to object storage (`uploads/raw/{uuid}`).
2. **Event**: the storage "object created" notification, or the client's "upload complete" call, enqueues a `process-image` job.
3. **Worker**: downloads the image, **validates** it by decoding (not by trusting the extension), strips EXIF (which contains **GPS location**!), auto-rotates, and creates 3 sizes in WebP/AVIF with `sharp`, under content-hashed keys (`img/{hash}-640.webp`).
4. **Serve** through a CDN with `Cache-Control: immutable`, using `srcset` so phones download the small version.
5. **Record** the image row with `status: ready` and its dimensions (so layouts don't jump). The UI shows a placeholder while the status is `processing`.

Alternative: **on-the-fly resizing** (an image CDN like imgix or Cloudflare Images, or a resize function with caching) avoids pre-generating sizes, at a per-request cost.
