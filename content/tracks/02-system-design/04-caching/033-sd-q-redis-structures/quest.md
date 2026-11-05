---
slug: "sd-q-redis-structures"
title: "Redis Beyond GET and SET"
type: "quiz"
xp: 15
resources: [{"title": "Redis: Data types", "url": "https://redis.io/docs/latest/develop/data-types/"}]
questions: [{"prompt": "Which Redis structure fits a game leaderboard?", "options": ["List", "Sorted set (ZADD / ZREVRANGE)", "String"], "answer": 1}, {"prompt": "Why is INCR safe for a counter shared by many API instances?", "options": ["It is not safe", "Redis runs each command atomically, so concurrent increments never overwrite each other", "It uses a SQL transaction"], "answer": 1}, {"prompt": "What eviction policy suits Redis used purely as a cache?", "options": ["noeviction", "allkeys-lru", "volatile-ttl only"], "answer": 1}, {"prompt": "How do you count unique daily visitors cheaply?", "options": ["A SQL COUNT DISTINCT on every request", "A Redis set (or a HyperLogLog for approximate counts)", "A list"], "answer": 1}, {"prompt": "Should the only copy of user orders live in Redis?", "options": ["Yes, it is fast", "No: keep the source of truth in a durable database and use Redis as a cache or queue"], "answer": 1}]
---
# Redis Beyond GET and SET

Redis is often used as a key-value cache, but its **data structures** solve many common problems cheaply:

| Structure | Commands | Use it for |
|-----------|----------|-----------|
| String | `GET`, `SET key val EX 60`, `INCR` | Caching, counters, simple rate limits |
| Hash | `HSET`, `HGETALL` | Small objects (a session) |
| Sorted set | `ZADD`, `ZINCRBY`, `ZREVRANGE` | Leaderboards, "top N", time-ordered feeds |
| Set | `SADD`, `SISMEMBER` | Unique visitors, tags, "already seen" |
| List / Stream | `LPUSH`/`BRPOP`, `XADD`/`XREADGROUP` | Simple queues (BullMQ is built on Redis) |

Every command runs **atomically**: `INCR` never loses an update, even with 50 API instances calling it at once. For several steps that must happen together, use a `MULTI` transaction or a Lua script.

Remember that Redis keeps data **in memory**. Set `maxmemory` with an eviction policy (`allkeys-lru` for a pure cache), and don't keep data there that you can't afford to lose unless persistence is configured.
