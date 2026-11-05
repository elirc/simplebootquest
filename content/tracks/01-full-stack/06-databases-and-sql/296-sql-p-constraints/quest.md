---
slug: "sql-p-constraints"
title: "Practice: Constraints Are Your Last Line of Defence"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
---
# Practice: Constraints Are Your Last Line of Defence

Validation in your API can have bugs, and someone can always connect with `psql`. **Constraints** make bad data impossible at the database level:

```sql
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  balance_cents INTEGER NOT NULL DEFAULT 0 CHECK (balance_cents >= 0),
  plan TEXT NOT NULL CHECK (plan IN ('free', 'pro'))
);
```

## Your task
Create a table `users` with:
- `id` INTEGER PRIMARY KEY
- `email` TEXT, required and unique
- `username` TEXT, required, with a length between 3 and 20 (`length(username) BETWEEN 3 AND 20`)
- `role` TEXT, required, default `'member'`, and only `'member'` or `'admin'`
- `age` INTEGER, optional, but if present it must be at least 13

The tests try to insert good and bad rows.
