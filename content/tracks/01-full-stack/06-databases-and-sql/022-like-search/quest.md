---
slug: "sql-like-search"
title: "Searching with LIKE"
type: "code"
language: "sql"
xp: 15
hints: ["Use `%the%` for \"contains\".", "Combine the two conditions with OR."]
---
# Searching with LIKE

`LIKE` matches patterns:

| Pattern | Matches |
|---------|---------|
| `'The %'` | starts with "The " |
| `'%wood'` | ends with "wood" |
| `'%of%'` | contains "of" |
| `'_ing'` | `_` is exactly one character |

In SQLite, `LIKE` is case-insensitive for ASCII. In **PostgreSQL it's case-sensitive**, so use `ILIKE` there (Prisma's `mode: 'insensitive'` generates it).

## Your task

Find books whose title **contains "the"** (any case) **or** whose author's name **starts with "Terry"**. Return `title`, ordered by title.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```
