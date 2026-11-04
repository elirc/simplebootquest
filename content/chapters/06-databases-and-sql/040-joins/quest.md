---
slug: sql-joins
title: JOINs
type: code
language: sql
xp: 20
hints: ["Join loans → members, loans → books, books → authors.", "`WHERE l.returned_on IS NULL` finds books still out."]
resources: [{"title": "Visual JOIN explanation", "url": "https://joins.spathon.com/"}]
---
# JOINs

A `JOIN` combines rows from two tables using a relationship:

```sql
SELECT books.title, authors.name
FROM books
JOIN authors ON authors.id = books.author_id;
```

Short **table aliases** keep it readable:

```sql
SELECT b.title, a.name AS author
FROM books b
JOIN authors a ON a.id = b.author_id;
```

### INNER vs LEFT JOIN

- `JOIN` (an INNER JOIN) keeps only rows that have a match in **both** tables.
- `LEFT JOIN` keeps **every** row from the left table, filling in `NULL` where there's no match. Use it for questions like "all authors, including those with no books".

You can chain joins. A loan connects a member to a book, and the book connects to its author:

```sql
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN books b ON b.id = l.book_id
```

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```

`returned_on` is `NULL` while a book is still out on loan.

## Your task

List every book that is **currently on loan** (not yet returned). Return the columns `member` (the member's name), `title` and `author` (the author's name), ordered by `borrowed_on` (oldest first).
