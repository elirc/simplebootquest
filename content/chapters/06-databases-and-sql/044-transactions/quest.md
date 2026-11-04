---
slug: "sql-transactions"
title: "Transactions"
type: "code"
language: "sql"
xp: 20
hints: ["Wrap the first transfer in `BEGIN; ... COMMIT;`.", "The second block ends with `ROLLBACK;`, which undoes the audit insert too."]
---
# Transactions

A transaction groups statements so they **all succeed or all fail**:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

If anything goes wrong in between, `ROLLBACK` undoes everything since `BEGIN`. Without a transaction, a crash between the two updates makes $100 vanish.

The **ACID** guarantees: **A**tomic (all or nothing), **C**onsistent (constraints hold), **I**solated (concurrent transactions don't see each other's half-done work), **D**urable (committed means saved).

## Your task

The `accounts` table has a `CHECK (balance >= 0)` constraint. Ada (id 1) has 100 and Grace (id 2) has 50.

1. In a transaction, transfer **30** from Ada to Grace and **COMMIT** it.
2. Then start a second transaction that moves **500** from Grace to Ada. Insert a row into `audit` saying `'attempted'` first, and finish with **ROLLBACK** (in a real app you'd roll back because the balance check would fail).

At the end, the balances should reflect only the first transfer, and the audit table should be empty.
