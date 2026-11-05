---
slug: "sd-file-storage"
title: "Files & Object Storage"
type: "quiz"
xp: 15
resources: [{"title": "AWS: Presigned URLs", "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html"}]
questions: [{"prompt": "Where should user-uploaded images live?", "options": ["In a Postgres bytea column", "In object storage, served via CDN", "On the API server's disk"], "answer": 1}, {"prompt": "What does a presigned URL let the client do?", "options": ["Read your database", "Upload (or download) one specific object directly to storage for a short time", "Bypass authentication forever"], "answer": 1}, {"prompt": "Why upload directly to storage instead of through the API?", "options": ["It is more secure by default", "It avoids streaming large files through your servers", "APIs cannot receive files"], "answer": 1}, {"prompt": "Why serve user uploads from a separate domain?", "options": ["SEO", "So a malicious uploaded HTML/SVG file cannot run scripts with your app's origin and cookies", "Faster DNS"], "answer": 1}, {"prompt": "Should you trust the Content-Type the browser sends?", "options": ["Yes", "No: validate type and size on the server (and in post-processing)"], "answer": 1}]
---
# Files & Object Storage

Never store user files in your database or on the app server's disk. Use **object storage** (S3, Cloudflare R2, Google Cloud Storage): cheap, durable (designed for 99.999999999% durability), and served via a CDN.

### Direct uploads with presigned URLs

Streaming a 50 MB video *through* your API wastes bandwidth and ties up a server. Instead:

1. The client asks your API for an upload URL: `POST /api/uploads { filename, contentType, size }`.
2. The API checks permissions and limits, then returns a **presigned URL**: a short-lived URL that allows one specific upload.
3. The client uploads **directly to storage**.
4. The client (or a storage event) tells the API it's done. A background job validates the file, generates thumbnails, and scans it.

### Safety

- Validate size and type server-side (don't trust the browser's `Content-Type`).
- Store files under random keys (`uploads/u_42/8f3a….jpg`), never under the user's raw filename.
- Serve user uploads from a **separate domain**, so an uploaded HTML/SVG file can't run scripts on your app's origin.
- Keep buckets private by default, and serve them through signed URLs or a CDN.
