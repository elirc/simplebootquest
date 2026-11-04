---
slug: "sd-zero-downtime-migrations"
title: "Zero-Downtime Migrations"
type: "quiz"
xp: 15
resources: [{"title": "Strong Migrations (patterns)", "url": "https://github.com/ankane/strong_migrations"}]
questions: [{"prompt": "Why is renaming a column in one step dangerous during a rolling deploy?", "options": ["It is not dangerous", "Old code still running will query the old column name and fail", "Postgres cannot rename columns"], "answer": 1}, {"prompt": "What is the first step of expand/contract?", "options": ["Drop the old column", "Add the new column and write to both", "Rename in place"], "answer": 1}, {"prompt": "How do you add an index to a large, busy Postgres table?", "options": ["CREATE INDEX", "CREATE INDEX CONCURRENTLY", "Lock the table overnight"], "answer": 1}, {"prompt": "Why set a lock_timeout for migrations?", "options": ["To make them faster", "So a migration waiting for a lock fails fast instead of blocking all queries behind it", "It is required by Prisma"], "answer": 1}, {"prompt": "How should you backfill 50 million rows?", "options": ["One big UPDATE", "In small batches", "Manually"], "answer": 1}]
---
# Zero-Downtime Migrations

During a rolling deploy, **old and new versions of your code run at the same time**, against the same database. A migration that breaks the old code (renaming a column, say) takes the site down for the minutes the deploy takes.

### Expand → migrate → contract

To rename `users.name` to `users.display_name` safely:

1. **Expand**: add `display_name` (nullable). Deploy code that writes to **both** columns and reads `name`.
2. **Migrate**: backfill `display_name` from `name` in small batches.
3. Deploy code that reads `display_name` (and still writes both).
4. **Contract**: deploy code that stops using `name`, then drop the column in a later migration.

### Other dangers

- `ALTER TABLE ... ADD COLUMN ... NOT NULL DEFAULT ...` used to rewrite whole tables. Modern Postgres is fast for constant defaults, but check your version.
- `CREATE INDEX` locks writes. Use `CREATE INDEX CONCURRENTLY` on big tables.
- Long-running migrations hold locks. Set a `lock_timeout`, so a migration fails fast instead of queueing every query behind it.
- Backfilling millions of rows in one `UPDATE` bloats the table and holds locks, so batch it.
