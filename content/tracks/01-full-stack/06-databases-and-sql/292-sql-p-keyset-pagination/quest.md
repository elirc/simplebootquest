---
slug: "sql-p-keyset-pagination"
title: "Practice: Keyset (Cursor) Pagination"
type: "code"
language: "sql"
xp: 20
hints: ["`(year, id) > (1989, 6)` works in SQLite and PostgreSQL. The long form is `year > 1989 OR (year = 1989 AND id > 6)`."]
resources: [{"title": "Use The Index, Luke: Paging through results", "url": "https://use-the-index-luke.com/no-offset"}]
---
# Practice: Keyset (Cursor) Pagination

`LIMIT 20 OFFSET 100000` is slow, because the database still walks past 100,000 rows. It's also unstable when rows are inserted. **Keyset pagination** remembers the last row you saw and asks for rows after it:

```sql
-- the previous page ended at (year 1989, id 6)
SELECT ... FROM books
WHERE (year, id) > (1989, 6)
ORDER BY year, id
LIMIT 3;
```

The `id` tie-breaker matters: without it, two books from the same year could be skipped or repeated. With an index on `(year, id)`, every page is equally fast.

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
The previous page (sorted by `year`, then `id`) ended with the book from **1989, id 6**. Return the next page of **3** books, with `id`, `title` and `year`.
