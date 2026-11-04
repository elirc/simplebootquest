---
slug: "sql-views"
title: "Views"
type: "code"
language: "sql"
xp: 15
hints: ["`CREATE VIEW name AS SELECT ...;` then a second statement that selects from it."]
---
# Views

A **view** is a saved query you can select from like a table:

```sql
CREATE VIEW active_loans AS
SELECT l.id, m.name AS member, b.title
FROM loans l JOIN members m ON m.id = l.member_id JOIN books b ON b.id = l.book_id
WHERE l.returned_on IS NULL;

SELECT * FROM active_loans WHERE member = 'Ada';
```

Views give complex joins a name, hide sensitive columns from reporting users, and keep queries consistent across an app.

## Your task

Create a view called `author_stats` with columns `author`, `books`, `total_pages` and `latest_year` (the most recent publication year), with one row per author. Then **select from it**: authors with **2 or more** books, ordered by `latest_year` descending.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
