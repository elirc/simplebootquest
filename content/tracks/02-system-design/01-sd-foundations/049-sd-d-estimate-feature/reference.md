# Comments with images: estimate

## Assumptions
- 2,000 daily active users (from the requirements doc), growing to 10,000 within a year. I'll size for **10k DAU**.
- 10% of DAU comment once a day → 1,000 comments/day.
- 20% of comments have one image, resized to ~250 KB (originals are discarded after resizing).
- Each recipe page view loads its comments. 10k DAU × 30 page views = 300k comment-list reads/day.

## Traffic
- Writes: 1,000/day ÷ 10⁵ ≈ **0.01 writes/s**. Negligible.
- Reads: 300k/day ÷ 10⁵ = **3 reads/s** average, ~30/s at a 10× evening peak. A single Postgres handles that easily, given an index on `comments(recipe_id, created_at)`.

## Storage
- Database: a comment row ≈ 1 KB → 1,000 × 1 KB = 1 MB/day ≈ **365 MB/year**. Trivial.
- Object storage: 200 images/day × 250 KB = 50 MB/day ≈ **18 GB/year**. Cheap in S3-compatible storage (well under $1/month).

## Bandwidth
- If each page view shows 3 comment images on average: 300k × 3 × 250 KB ≈ **225 GB/day** of egress. That's the expensive part. Serving it from the API server would waste bandwidth and CPU.
- So: put the images behind a **CDN**, with long cache lifetimes (immutable, content-hashed keys) and lazy loading below the fold. The CDN absorbs most of it.

## Conclusion
- No new database infrastructure is needed. Add one table and one index.
- New infrastructure: **object storage + CDN** for images, uploads via **pre-signed URLs** so files never pass through Node, and a small background job to resize them.
- Riskiest assumption: the images shown per page view. If comments become very popular, egress grows fastest. Validate by measuring after a 10% rollout behind a feature flag, and set a CDN cost alert.
