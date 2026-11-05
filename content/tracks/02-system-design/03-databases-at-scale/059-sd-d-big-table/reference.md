# Events table plan

## Diagnosis
- **Slow activity page**: there's no index on `(user_id, created_at)`, so Postgres scans a huge index on `created_at` or the table itself, filtering by user.
- **Analytics slow down everything**: big sequential scans on the primary compete for I/O and memory (they evict the cache) with user traffic.
- **Disk full**: 500M rows plus indexes, and we keep everything forever even though 90% of it is never read.

## Activity page
- `CREATE INDEX CONCURRENTLY events_user_created_idx ON events (user_id, created_at DESC);`
- The query becomes `WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50`, an index range scan of 50 entries, so it should take a few milliseconds.
- Keyset pagination (`created_at < $cursor`) for "load more", not OFFSET.

## Partitioning & retention
- Create a new **range-partitioned** table `events_p` partitioned by month on `created_at`. Each partition gets the same index.
- New writes go to `events_p` (the application writes there via a rename/view switch, below).
- Retention: partitions older than **90 days** are exported to compressed Parquet in object storage (cheap, still queryable with DuckDB or Athena for compliance), then **dropped**. Dropping a partition is instant and returns the disk, unlike `DELETE`, which bloats the table.
- A scheduled job creates next month's partition ahead of time and handles exports and drops, with an alert if it fails.
- Compliance: the object storage bucket has a 2-year lifecycle rule and object lock.

## Analytics
- Run nightly analytics on a **read replica** (sized for scans), or better, on the Parquet exports and a small warehouse. No analytics on the primary.

## Rollout
1. Create the index concurrently and verify with `EXPLAIN ANALYZE` (instant win, low risk).
2. Create `events_p` and its partitions. Have the app **dual-write** for a few days.
3. Backfill the last 90 days into `events_p` in batches of 10k rows, throttled, with progress tracked.
4. Switch reads to `events_p`, behind a feature flag, and compare results for a sample of users.
5. Export the older data to object storage and verify row counts. Then drop the old table.

**Success**: activity page p95 < 100 ms, disk usage under 40%, and no analytics load on the primary.
