---
slug: "sd-index-strategy"
title: "Indexing Strategy"
type: "quiz"
xp: 15
resources: [{"title": "Use The Index, Luke", "url": "https://use-the-index-luke.com/"}, {"title": "PostgreSQL: pg_stat_statements", "url": "https://www.postgresql.org/docs/current/pgstatstatements.html"}]
questions: [{"prompt": "Does Postgres automatically index foreign key columns?", "options": ["Yes", "No: you usually need to add them yourself"], "answer": 1}, {"prompt": "Which index best serves `WHERE owner_id = ? ORDER BY created_at DESC LIMIT 20`?", "options": ["(created_at)", "(owner_id, created_at)", "(created_at, owner_id)"], "answer": 1}, {"prompt": "What is the cost of adding many indexes?", "options": ["Slower reads", "Slower writes and more storage", "None"], "answer": 1}, {"prompt": "Which query should you optimise first?", "options": ["The single slowest query, even if it runs once a month", "The one with the highest total time (frequency × duration)", "Whichever is easiest"], "answer": 1}, {"prompt": "A partial index like `WHERE deleted_at IS NULL` is useful because…", "options": ["It indexes only the rows queries actually touch, so it is smaller and faster", "It deletes rows", "It speeds up writes to deleted rows"], "answer": 0}]
---
# Indexing Strategy

Before adding hardware or caches, **fix your queries**. Most "the database is slow" problems are missing indexes or N+1 queries.

### What to index

- Foreign keys you filter or join on (`todos.owner_id`). Postgres does **not** index these automatically!
- Columns in frequent `WHERE`, `ORDER BY` and `JOIN` clauses.
- **Composite indexes** for common combinations: `(owner_id, created_at)` serves "my todos, newest first" in one index scan. Column order matters: put the equality filter first, then the range/sort column.
- **Partial indexes** for hot subsets: `WHERE deleted_at IS NULL`.
- **Unique** indexes double as constraints (`users.email`).

### Costs

Every index slows down writes (it must be updated) and uses disk space. Unused indexes are pure cost, so check `pg_stat_user_indexes`.

### Find the slow queries

Enable slow-query logging, use `EXPLAIN ANALYZE`, or `pg_stat_statements`. Optimise the queries that take the most **total** time (frequency × duration), not just the slowest single one.
