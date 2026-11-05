---
slug: "crud-q-data-integrity"
title: "Quiz: Data Integrity"
type: "quiz"
xp: 15
questions: [{"prompt": "Two signups with the same email arrive at the same moment. What reliably prevents a duplicate account?", "options": ["Checking findUnique before create", "A UNIQUE constraint on email, with the P2002 error mapped to 409", "A setTimeout between check and insert"], "answer": 1}, {"prompt": "Deleting a user should delete their todos. Which foreign key option does that?", "options": ["ON DELETE RESTRICT", "ON DELETE CASCADE", "ON DELETE SET NULL"], "answer": 1}, {"prompt": "Deleting a product that appears in past orders should be refused. Which option?", "options": ["ON DELETE CASCADE", "ON DELETE RESTRICT (and soft-delete the product instead)", "No foreign key at all"], "answer": 1}, {"prompt": "Why store `unitPriceCents` on each order line instead of joining to the current product price?", "options": ["To save a join", "Prices change: the order must record what the customer actually paid", "Prisma requires it"], "answer": 1}, {"prompt": "Why store money as integer cents?", "options": ["Integers are shorter", "Floating point cannot represent values like 0.1 exactly, so totals drift", "SQL has no decimals"], "answer": 1}, {"prompt": "An endpoint creates an order and then decrements stock in two separate queries without a transaction. What can happen?", "options": ["Nothing, they always both run", "A crash between them leaves an order with stock never decremented (or the reverse)", "The database merges them automatically"], "answer": 1}]
---
# Quiz: Data Integrity

Your API's validation is the first line of defence. The database is the **last**. A robust CRUD backend uses both:

- **Constraints** (`NOT NULL`, `UNIQUE`, `CHECK`, foreign keys) make bad data impossible, even from scripts, migrations and bugs.
- **Transactions** keep multi-step changes all-or-nothing.
- **Unique constraints, not "check then insert"**: `if (!await findByEmail(email)) await create(...)` has a race window. Two requests can both pass the check. Let the database reject the duplicate (Prisma error `P2002`) and map it to `409 Conflict`.
- **Foreign key actions**: `ON DELETE CASCADE` deletes children with the parent; `RESTRICT` refuses to delete a parent that has children; `SET NULL` detaches them. Choose deliberately.
