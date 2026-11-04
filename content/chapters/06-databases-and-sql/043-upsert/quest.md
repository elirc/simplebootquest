---
slug: "sql-upsert"
title: "UPSERT: INSERT … ON CONFLICT"
type: "code"
language: "sql"
xp: 20
hints: ["`ON CONFLICT (player) DO UPDATE SET ... WHERE excluded.score > high_scores.score`"]
resources: [{"title": "PostgreSQL: INSERT ON CONFLICT", "url": "https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT"}]
---
# UPSERT: INSERT … ON CONFLICT

"Insert this row, or update it if it already exists" is so common it has its own syntax (in both PostgreSQL and SQLite):

```sql
INSERT INTO page_views (path, views) VALUES ('/home', 1)
ON CONFLICT (path) DO UPDATE SET views = views + 1;
```

It's **atomic**: no race between "check if it exists" and "insert", the same idea as the idempotent XP award in this app's own code. Prisma exposes it as `upsert`.

`excluded` refers to the row you tried to insert: `SET score = MAX(score, excluded.score)`.

## Your task

The setup creates `high_scores (player TEXT PRIMARY KEY, score INTEGER, updated_on TEXT)`, where Ada has 50 and Grace has 80.

Write **one statement** that records these new scores, keeping each player's **best** score, and only changing `updated_on` to `'2026-03-05'` when the score actually improves:

- Ada: 70
- Grace: 60
- Linus: 40 (a new player)
