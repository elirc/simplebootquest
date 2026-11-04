---
slug: sql-insert-update-delete
title: INSERT, UPDATE & DELETE
type: code
language: sql
xp: 25
hints: ["Each statement ends with a semicolon.", "Test your DELETE condition as a SELECT first."]
---
# INSERT, UPDATE & DELETE

These are the **C**, **U** and **D** of CRUD (`SELECT` is the **R**).

```sql
INSERT INTO members (name, email) VALUES ('Margaret', 'margaret@example.com');

UPDATE loans SET returned_on = '2026-03-01' WHERE id = 2;

DELETE FROM loans WHERE returned_on IS NOT NULL;
```

### ⚠️ Always use WHERE with UPDATE and DELETE

```sql
UPDATE members SET email = 'oops@example.com';  -- updates EVERY member
DELETE FROM books;                               -- deletes EVERYTHING
```

A good habit: write the `WHERE` clause *first*, and test it with a `SELECT` before running the destructive statement.

### Transactions

When several statements must succeed or fail together (like moving money between accounts), wrap them in a transaction:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- or ROLLBACK to undo everything
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

Write **three statements**, in order:

1. Add a new member named `Margaret` with the email `margaret@example.com`.
2. Mark the loan of *Kindred* (loan id `2`) as returned on `2026-03-01`.
3. Delete every loan that has been returned **before** `2026-02-01` (cleaning up old history).
