# Activity feed

## Requirements
- **Functional:** follow and unfollow; a home feed of followed users' activities, newest first, with cursor pagination.
- **Non-functional:** feed p95 < 200 ms; new activity visible within ~1 minute; feeds may be slightly stale.
- **Scale:** 10M feed reads/day ≈ 115/s average, ~1k/s peak. 50k activities/hour ≈ 14 writes/s. An average of 150 followees per user.

## High-level design
```
write: API → activities table → queue → fan-out worker → feed_items (per follower)
read:  API → feed_items (precomputed) ∪ celebrity activities (fetched at read time) → merge
```

## Data model
`activities(id, actor_id, verb, object_type, object_id, created_at)`, `follows(follower_id, followee_id)`, `feed_items(user_id, activity_id, created_at)` indexed on `(user_id, created_at DESC)`, keeping the last 500 items per user (older ones are trimmed).

## API
`GET /api/feed?cursor=...` → `{ items: [...hydrated activities], next_cursor }`.

## Deep dive: fan-out strategy
- **Fan-out on read** (`SELECT ... WHERE actor_id IN (my 150 followees) ORDER BY created_at DESC LIMIT 20`) is simple, but runs an expensive merge on every one of the ~1k reads/s.
- **Fan-out on write** precomputes reads (a cheap indexed range scan), but a celebrity with 500k followers makes **500k inserts** per post.
- **Hybrid (chosen):** fan-out on write for normal accounts (< 10k followers), done in batches by a worker. Celebrity activities are **not** fanned out: at read time, query the recent activities of the celebrities you follow (usually few), cache them heavily (they're the same for everyone), and merge them with the precomputed items.
- Hydration: batch-load the referenced recipes and users with `WHERE id IN (...)` (no N+1), with a Redis cache for hot objects.

## Trade-offs & alternatives
- Extra storage for `feed_items` in exchange for fast reads, appropriate at a 100:1 read/write ratio.
- Eventual consistency: a new post appears in followers' feeds after the fan-out job runs (seconds to a minute).
- Unfollowing leaves stale items until they're trimmed. We filter at read time against the current follows list.
