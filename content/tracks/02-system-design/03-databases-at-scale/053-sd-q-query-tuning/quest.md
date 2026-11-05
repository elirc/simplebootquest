---
slug: "sd-q-query-tuning"
title: "Query Tuning at Scale"
type: "quiz"
xp: 15
resources: [{"title": "Use The Index, Luke", "url": "https://use-the-index-luke.com/"}, {"title": "PostgreSQL: Using EXPLAIN", "url": "https://www.postgresql.org/docs/current/using-explain.html"}]
questions: [{"prompt": "Which index best serves `WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20`?", "options": ["(created_at)", "(user_id, created_at DESC)", "(user_id) and (created_at) separately"], "answer": 1}, {"prompt": "Most queries filter `deleted_at IS NULL`, and 90% of rows are deleted. What helps?", "options": ["A partial index with WHERE deleted_at IS NULL", "An index on deleted_at only", "No index"], "answer": 0}, {"prompt": "What does a \"Seq Scan\" on a 50M-row table in a hot query usually mean?", "options": ["It is optimal", "There is no usable index for that filter (or the planner thinks one would not help)", "The table is empty"], "answer": 1}, {"prompt": "How do you find the queries that cost the most overall?", "options": ["Guess", "pg_stat_statements, sorted by total time", "Count lines of code"], "answer": 1}, {"prompt": "`WHERE title LIKE \"%milk%\"` is slow. A good fix in Postgres?", "options": ["A B-tree index on title", "A trigram (pg_trgm) GIN index or full-text search", "More RAM"], "answer": 1}]
---
# Query Tuning at Scale

At 10,000 rows almost any query is fast. At 100 million, the query **plan** is everything.

- **Read the plan**: `EXPLAIN (ANALYZE, BUFFERS) SELECT ...` shows whether Postgres does a `Seq Scan` (reads the whole table), an `Index Scan`, or an `Index Only Scan`.
- **Composite indexes** follow the query: `WHERE user_id = ? ORDER BY created_at DESC LIMIT 20` wants an index on `(user_id, created_at DESC)`.
- **Covering indexes** (`INCLUDE (title)`) let Postgres answer from the index alone.
- **Partial indexes**: `CREATE INDEX ... WHERE deleted_at IS NULL` stays small when most queries ignore soft-deleted rows.
- **Avoid** functions on indexed columns (`WHERE lower(email) = ?`) unless you index that expression, and avoid leading wildcards (`LIKE '%term'`). Use full-text search or trigram indexes for those.
- **`pg_stat_statements`** shows which queries use the most total time. Fix the top few, because they usually dominate.
