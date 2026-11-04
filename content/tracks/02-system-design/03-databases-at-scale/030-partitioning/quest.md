---
slug: "sd-partitioning"
title: "Partitioning & Sharding"
type: "quiz"
xp: 15
questions: [{"prompt": "What is a good use for table partitioning by month?", "options": ["A users table", "An append-heavy events/log table where old data is dropped", "A small settings table"], "answer": 1}, {"prompt": "What is the hardest part of sharding?", "options": ["Choosing a database", "Cross-shard queries, transactions and re-sharding", "Writing INSERT statements"], "answer": 1}, {"prompt": "A multi-tenant SaaS shards by tenant_id. One tenant is 100× bigger than the rest. This is a…", "options": ["Hot spot", "Replica", "Deadlock"], "answer": 0}, {"prompt": "Roughly when should a typical startup consider sharding?", "options": ["From day one", "After exhausting indexing, caching, replicas and partitioning, and often never", "At 1,000 users"], "answer": 1}, {"prompt": "Dropping an old partition vs DELETE-ing millions of rows is…", "options": ["Slower", "Much faster, with no bloat", "The same"], "answer": 1}]
---
# Partitioning & Sharding

When one table gets huge, you can split it up.

- **Partitioning** (in one database): Postgres can split `events` into monthly partitions. Queries for one month scan one partition, and old months can be dropped instantly instead of with a slow `DELETE`. It's great for time-series and logs.
- **Sharding** (across databases): different rows live on different servers, chosen by a **shard key** (for example `tenant_id`). Write capacity scales almost without limit, but:
  - queries across shards (global search, reports) get hard,
  - cross-shard transactions and joins are painful,
  - re-sharding when you grow is a major project,
  - a bad shard key creates **hot spots** (one celebrity tenant overloading one shard).

### When?

Much later than most people think. A well-indexed Postgres on modern hardware handles **terabytes** and **thousands of writes per second**. Reach for sharding only after indexing, caching, read replicas, partitioning and archiving old data. Many companies never need it.
