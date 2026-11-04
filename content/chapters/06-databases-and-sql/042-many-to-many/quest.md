---
slug: "sql-many-to-many"
title: "Many-to-Many with a Join Table"
type: "code"
language: "sql"
xp: 25
hints: ["Aggregate with `GROUP_CONCAT(name, ',')` after a LEFT JOIN.", "COALESCE handles posts with no tags."]
---
# Many-to-Many with a Join Table

Posts have many tags, and tags have many posts. Neither table can hold a single foreign key, so a **join table** connects them:

```sql
CREATE TABLE post_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags(id)  ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)          -- no duplicate tagging
);
```

Querying goes through it in two joins:

```sql
SELECT p.title, t.name
FROM posts p
JOIN post_tags pt ON pt.post_id = p.id
JOIN tags t ON t.id = pt.tag_id;
```

## Your task

The setup has `posts`, `tags` and `post_tags`. Return each post's `title` and a `tags` column of its tag names, **sorted alphabetically and comma-separated** (`'css,js'`), ordered by title. Posts without tags have `tags` = `''`.

Hint: SQLite's `GROUP_CONCAT(name, ',')` (Postgres: `string_agg`). To sort inside it, aggregate from an already-sorted subquery.
