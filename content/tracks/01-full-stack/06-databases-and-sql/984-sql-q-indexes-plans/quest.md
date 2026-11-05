---
slug: "sql-q-indexes-plans"
title: "Quiz: Indexes & Query Plans"
type: "quiz"
xp: 15
resources: [{"title": "Use The Index, Luke", "url": "https://use-the-index-luke.com/"}]
questions: [{"prompt": "`SELECT * FROM todos WHERE user_id = 7` is slow on a big table. What is the usual fix?", "options": ["Add LIMIT", "CREATE INDEX ON todos (user_id)", "Use SELECT DISTINCT"], "answer": 1}, {"prompt": "An index exists on (user_id, created_at). Which query can NOT use it efficiently?", "options": ["WHERE user_id = 1", "WHERE user_id = 1 ORDER BY created_at", "WHERE created_at > '2026-01-01'"], "answer": 2}, {"prompt": "What is the cost of adding many indexes?", "options": ["None", "Slower inserts and updates, plus more storage", "Queries return different results"], "answer": 1}, {"prompt": "`WHERE lower(email) = ?` ignores the index on `email`. Why?", "options": ["Indexes are case-sensitive", "The index stores email, not lower(email). You need an expression index or must normalise on write", "lower() is not allowed in WHERE"], "answer": 1}, {"prompt": "Which tool shows whether PostgreSQL used an index for a query?", "options": ["EXPLAIN ANALYZE", "VACUUM", "pg_dump"], "answer": 0}, {"prompt": "Does PostgreSQL create an index for a FOREIGN KEY column automatically?", "options": ["Yes, always", "No: it indexes the referenced primary key, but you must index the referencing column yourself"], "answer": 1}]
---
# Quiz: Indexes & Query Plans

An index is a sorted copy of some columns (a B-tree) that points back to the rows. It turns "scan every row" into "jump to the right place".

- `EXPLAIN QUERY PLAN` (SQLite) or `EXPLAIN ANALYZE` (PostgreSQL) shows whether a query uses an index (`SEARCH ... USING INDEX`) or reads the whole table (`SCAN`).
- A **composite index** on `(user_id, created_at)` serves `WHERE user_id = ?`, and `WHERE user_id = ? ORDER BY created_at`, but **not** `WHERE created_at > ?` on its own (the leftmost-prefix rule).
- Every index speeds up reads but slows down writes and uses disk space. Index what you actually query.
- PostgreSQL does **not** automatically index foreign key columns. Add an index on `todos.user_id` yourself.
