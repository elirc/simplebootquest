# Photo uploads & thumbnails

## Requirements
- **Functional:** upload up to 10 photos per record, show thumbnail and medium sizes, download the original, delete.
- **Non-functional:** an upload never blocks the API; a thumbnail is ready in < 30 s at p95; storage is durable; deleted photos are gone from the CDN within 24 h.
- **Scale:** 50k uploads/day × 10 MB = 500 GB/day of originals ≈ 180 TB/year. That's object storage plus lifecycle rules, and processing ~0.6 images/s on average (bursty).

## High-level design
```
client → API (POST /uploads) → presigned PUT URL
client → object storage (originals bucket, private)
storage event → queue → image worker (sharp/libvips) → derived bucket → CDN
worker → API DB: photo.status = ready
```

## Data model
`photos(id, record_id, owner_id, status ENUM(pending, ready, failed), original_key, width, height, bytes, created_at)`. Keys: `originals/{owner}/{photoId}`, `derived/{photoId}/{200|1200}.webp`.

## API
`POST /api/records/:id/photos {contentType, size}` → `{photoId, uploadUrl}` (rejects more than 10 photos or > 25 MB). `GET /api/records/:id` includes the photos with their status and CDN URLs. `DELETE /api/photos/:id`.

## Deep dive: processing
The worker downloads the original, checks the real type by its magic bytes (the client's content type isn't trusted), rejects anything that isn't JPEG/PNG/HEIC/WebP, strips EXIF (GPS privacy!), auto-rotates, then writes WebP derivatives at 200 and 1200 px. It's idempotent: output keys are derived from the photo id, so a retry just overwrites them. Failures retry 3 times, then mark the photo `failed`, and the UI offers "retry upload". While a photo is `pending`, the UI shows the local preview the browser already has.

## Trade-offs & alternatives
- Processing on upload vs on demand (an image CDN that resizes on the fly): on-upload is predictable and cheap at our scale, while on-demand is more flexible for new sizes.
- WebP only for derivatives: the originals are still available for download.
- Lifecycle rules move originals to infrequent-access storage after 30 days, trading a little retrieval latency for big cost savings.
