---
slug: "sd-connection-pools"
title: "Database Connection Pools"
type: "quiz"
xp: 15
resources: [{"title": "PgBouncer", "url": "https://www.pgbouncer.org/"}, {"title": "Prisma: Connection pool", "url": "https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool"}]
questions: [{"prompt": "Why do apps use connection pools?", "options": ["Connections are free", "Opening connections is expensive, so reusing them saves time and server resources", "Postgres requires it"], "answer": 1}, {"prompt": "8 instances each have a pool of 25 and Postgres max_connections is 100. What happens under load?", "options": ["It works fine", "Connection errors: 200 possible connections exceed the limit", "Queries get faster"], "answer": 1}, {"prompt": "What does PgBouncer do?", "options": ["Caches query results", "Multiplexes many client connections onto fewer real database connections", "Backs up the database"], "answer": 1}, {"prompt": "Why is calling a slow external API inside a DB transaction bad?", "options": ["It is not allowed", "It holds a connection (and possibly locks) for the whole call, starving other requests", "It corrupts data"], "answer": 1}, {"prompt": "Doubling the pool size always doubles throughput.", "options": ["True", "False: past a point, more concurrent queries contend for CPU and locks"], "answer": 1}]
---
# Database Connection Pools

Opening a Postgres connection is expensive (a TLS handshake, authentication, and a backend process on the server). So apps keep a **pool** of open connections and reuse them. Prisma, `pg` and every ORM do this.

### The maths that bites when you scale out

Postgres has a hard `max_connections` (often 100 on small managed plans).

```
10 instances × pool size 20 = 200 connections  →  "too many clients already" 💥
```

Serverless makes it worse: every function invocation may open its own connections.

### Fixes

- **Size pools deliberately**: total = instances × pool size < max_connections (leave headroom for migrations and admin tools).
- Use a **connection pooler** like **PgBouncer** (or your host's built-in pooler) in front of Postgres. Thousands of client connections are multiplexed onto a few dozen real ones.
- Keep transactions **short**: a connection held during a slow external API call is a connection nobody else can use.

A bigger pool isn't always faster. Postgres does real work per connection, and past a point, more concurrent queries just contend for CPU and locks.
