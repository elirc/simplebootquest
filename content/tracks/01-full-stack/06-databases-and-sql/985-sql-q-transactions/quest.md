---
slug: "sql-q-transactions"
title: "Quiz: Transactions & Concurrency"
type: "quiz"
xp: 15
resources: [{"title": "PostgreSQL: Transaction isolation", "url": "https://www.postgresql.org/docs/current/transaction-iso.html"}]
questions: [{"prompt": "A money transfer debits one account and credits another. Why use a transaction?", "options": ["It is faster", "So a crash between the two statements cannot lose or create money", "Transactions are required for UPDATE"], "answer": 1}, {"prompt": "Two requests read stock=1 and both write stock=0. What is this bug called?", "options": ["Deadlock", "Lost update (a race condition)", "Phantom read"], "answer": 1}, {"prompt": "Which statement prevents overselling without an explicit lock?", "options": ["UPDATE products SET stock = 0 WHERE id = 3", "UPDATE products SET stock = stock - 1 WHERE id = 3 AND stock > 0, then check the affected row count", "SELECT stock FROM products"], "answer": 1}, {"prompt": "What does ROLLBACK do?", "options": ["Undoes every change made in the current transaction", "Restores yesterday's backup", "Deletes the table"], "answer": 0}, {"prompt": "Should you call a slow external API (like sending email) inside a database transaction?", "options": ["Yes, so the email is atomic too", "No: it holds locks and connections for a long time. Commit first, then do the side effect (or use an outbox table)"], "answer": 1}]
---
# Quiz: Transactions & Concurrency

A transaction groups statements so they succeed or fail together, which gives you **ACID**:

- **Atomic**: all or nothing.
- **Consistent**: constraints hold before and after.
- **Isolated**: concurrent transactions don't see each other's half-done work.
- **Durable**: once committed, it survives a crash.

The classic bug is the **lost update**: two requests both read `stock = 1`, both see enough stock, and both write `stock = 0`, selling one item twice. Fixes:

```sql
UPDATE products SET stock = stock - 1 WHERE id = 3 AND stock > 0;  -- atomic check-and-set; check rows affected
SELECT ... FOR UPDATE;   -- PostgreSQL: lock the row inside a transaction
```

In Prisma: `prisma.$transaction([...])` or `prisma.$transaction(async (tx) => {...})`.
