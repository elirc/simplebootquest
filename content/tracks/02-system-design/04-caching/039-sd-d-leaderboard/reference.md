# Weekly leaderboard

## Requirements
- The top 100 can be up to **~5 seconds stale**. "Your rank" should reflect your own XP within a few seconds of earning it.
- Exact ordering matters (people care about rank 99 vs 100). Ties are broken by whoever reached the score first.
- It resets every Monday at 00:00 UTC. Last week's final board is kept for the "last week's winners" page.

## Storage & updates
- The source of truth stays the `xp_events` table in Postgres.
- One Redis **sorted set** per week: `lb:2026-W10`. Each XP event (already written to Postgres) also runs `ZINCRBY lb:2026-W10 <xp> <userId>`, which is atomic and O(log n).
- To break ties by time, use a composite score: `xp * 10^10 + (10^10 - secondsSinceWeekStart)`, so an earlier achievement ranks higher at the same XP.
- The increment happens in the same code path that records XP, after the database commit. If Redis is down, the event is still saved and a repair job fixes the board (below).

## Reads
- Top 100: `ZREVRANGE lb:2026-W10 0 99 WITHSCORES`. That's O(log n + 100), sub-millisecond. Cache the rendered JSON in-process for 2 s, so 200 req/s per instance becomes 1 Redis call every 2 s.
- Your rank: `ZREVRANK lb:2026-W10 <userId>` and `ZSCORE`, which is O(log n) per user. Not cached, because it's personal.
- Names and avatars for the 100 ids: one batched `SELECT ... WHERE id = ANY($1)`, cached for 60 s.

## Failure & recovery
- If the key is lost (Redis restart without persistence), a **rebuild job** runs `SELECT user_id, SUM(xp) FROM xp_events WHERE created_at >= week_start GROUP BY user_id` on a replica and repopulates it with ZADD in batches. That takes ~2 seconds. While rebuilding, the page shows a "leaderboard is updating" message.
- A nightly reconciliation compares Redis with Postgres for the current week and fixes any drift.

## Weekly reset
- Nothing needs deleting. The new week simply uses a new key. Old keys get `EXPIRE` after 14 days, and the final top 100 is copied into a Postgres `leaderboard_snapshots` table at the reset.

## Trade-offs
- **A materialised view refreshed every minute** would be simpler (no Redis), but "your rank" would need a costly window query, and the freshness would be worse.
- **Computing it on every request** is too slow (2 s).
- **The sorted set** adds a dependency, but gives O(log n) updates and rank lookups, and it rebuilds from Postgres, so it's never the source of truth.
