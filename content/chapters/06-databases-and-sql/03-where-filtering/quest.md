---
slug: sql-where-filtering
title: Filtering with WHERE
type: code
language: sql
xp: 15
---
# Filtering with WHERE

`WHERE` keeps only the rows that match a condition:

```sql
SELECT * FROM books WHERE genre = 'fantasy';
SELECT * FROM books WHERE year >= 1990 AND pages < 400;
SELECT * FROM books WHERE genre IN ('sci-fi', 'fantasy');
SELECT * FROM books WHERE year BETWEEN 1970 AND 1979;
SELECT * FROM books WHERE title LIKE 'The %';   -- % = any characters
SELECT * FROM loans WHERE returned_on IS NULL;  -- never "= NULL"!
```

### NULL is special

`NULL` means "unknown", so `NULL = NULL` is not true. It's `NULL`. Always use `IS NULL` or `IS NOT NULL`.

### Never build SQL with string concatenation

```js
// 🚨 SQL injection: a user can type  ' OR '1'='1
db.query(`SELECT * FROM users WHERE email = '${email}'`);
// ✅ Parameterised query: the driver escapes values safely
db.query('SELECT * FROM users WHERE email = $1', [email]);
```

ORMs like Prisma parameterise everything for you.

### The database

```
authors (id, name, country)
books   (id, title, author_id → authors.id, year, genre, pages)
members (id, name, email)
loans   (id, book_id → books.id, member_id → members.id, borrowed_on, returned_on)
```

`returned_on` is `NULL` while a book is still out on loan.

## Your task

Return the **title**, **genre** and **pages** of every *sci-fi or fantasy* book published **from 1980 onwards** with **fewer than 400 pages**, ordered by pages ascending.
