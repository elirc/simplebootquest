---
slug: "sql-create-table"
title: "CREATE TABLE & Constraints"
type: "code"
language: "sql"
xp: 20
hints: ["`CHECK (priority IN (...))` restricts values.", "Table-level constraints go after the columns: `UNIQUE (owner_email, title)`."]
resources: [{"title": "SQLite: CREATE TABLE", "url": "https://www.sqlite.org/lang_createtable.html"}, {"title": "PostgreSQL: Constraints", "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"}]
---
# CREATE TABLE & Constraints

Constraints make the **database** enforce your rules, even when application code has bugs:

```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

In this quest, the tests try to insert bad rows into your table and expect them to **fail**.

## Your task

Create a table `todos` with:

- `id`: an integer primary key
- `title`: text, required, and at least 1 character long (use `CHECK (length(title) > 0)`)
- `priority`: text, required, defaulting to `'medium'`, and one of `'low'`, `'medium'`, `'high'`
- `done`: integer, required, defaulting to `0`, and only `0` or `1`
- `owner_email`: text, required
- a `UNIQUE` constraint on `(owner_email, title)`, so one user can't have two todos with the same title
