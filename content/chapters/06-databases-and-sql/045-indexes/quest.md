---
slug: "sql-indexes"
title: "Indexes & Query Plans"
type: "code"
language: "sql"
xp: 25
hints: ["A composite index on `(user_id, created_at)` can filter on user_id and return rows already sorted by created_at."]
resources: [{"title": "Use The Index, Luke!", "url": "https://use-the-index-luke.com/"}, {"title": "SQLite: EXPLAIN QUERY PLAN", "url": "https://www.sqlite.org/eqp.html"}]
---
# Indexes & Query Plans

Without an index, `WHERE email = ?` makes the database **scan every row**. An index is a sorted lookup structure (usually a B-tree), so the database can jump straight to the match: O(log n) instead of O(n).

```sql
CREATE INDEX idx_loans_member ON loans(member_id);
CREATE UNIQUE INDEX idx_members_email ON members(email);
```

You can ask the database **how** it will run a query:

```sql
EXPLAIN QUERY PLAN SELECT * FROM loans WHERE member_id = 1;  -- SQLite
EXPLAIN ANALYZE SELECT ...;                                   -- PostgreSQL
-- "SCAN loans" = full table scan 😬     "SEARCH loans USING INDEX ..." = 🚀
```

Index the columns you **filter, join and sort on**, especially foreign keys. But indexes aren't free: each one slows down writes and uses disk.

## Your task

The `events` table has no indexes. Create indexes so that both of these queries use an index (the tests check `EXPLAIN QUERY PLAN`):

1. `SELECT * FROM events WHERE user_id = 42 ORDER BY created_at DESC` (one composite index serves both the filter and the sort)
2. `SELECT * FROM events WHERE type = 'purchase'`
