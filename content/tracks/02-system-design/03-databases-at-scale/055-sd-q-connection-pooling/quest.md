---
slug: "sd-q-connection-pooling"
title: "Connection Limits and Poolers"
type: "quiz"
xp: 15
resources: [{"title": "Prisma: Connection pool", "url": "https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool"}]
questions: [{"prompt": "15 instances each with a pool of 20 connections need how many Postgres connections at most?", "options": ["20", "35", "300"], "answer": 2}, {"prompt": "What does PgBouncer in transaction mode do?", "options": ["Caches query results", "Lets many client connections share a small number of real database connections, one transaction at a time", "Replicates data"], "answer": 1}, {"prompt": "Why is holding a transaction open during a slow third-party API call bad?", "options": ["It is not", "It ties up a scarce connection (and its locks) while doing nothing in the database", "It encrypts the data"], "answer": 1}, {"prompt": "Requests fail with \"timed out fetching a connection\" at low traffic. A likely cause?", "options": ["Too many indexes", "A connection leak: connections are not returned to the pool", "Slow DNS"], "answer": 1}, {"prompt": "Why do serverless functions often need a pooler?", "options": ["They cannot use SQL", "Many concurrent invocations each open connections, which quickly exceeds the database limit", "They are always idle"], "answer": 1}]
---
# Connection Limits and Poolers

Every Postgres connection is a separate server **process** that uses memory, so databases allow only a limited number (often 100 to 500 on managed plans). Apps hit that limit sooner than you'd expect:

```
instances × pool size per instance = total connections
10 × 10 = 100        (already at the limit for a small plan)
```

Serverless functions are worse: each concurrent invocation may open its own connections.

Fixes:
- **Size pools deliberately.** A pool of about `2 × CPU cores` per database is often enough, because a busy connection is a busy CPU.
- **PgBouncer**, or a managed pooler (Supabase, Neon, RDS Proxy), in **transaction mode**: thousands of client connections share a few dozen real ones.
- **Keep transactions short.** A connection held while you wait for an HTTP call is wasted.
- **Watch for leaks**: a `pool timeout` error under low traffic often means connections that are never released.
