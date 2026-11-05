---
slug: "sql-p-archive-loans"
title: "Practice: Moving Rows Between Tables"
type: "code"
language: "sql"
xp: 20
---
# Practice: Moving Rows Between Tables

Big tables get slow. A common fix is to **archive** old rows: copy them to an archive table, then delete them from the hot table. `INSERT INTO ... SELECT` copies many rows in one statement.

```sql
INSERT INTO archive (a, b) SELECT a, b FROM live WHERE ...;
DELETE FROM live WHERE ...;
```

In production you'd wrap both statements in a **transaction** so a crash can't leave rows copied but not deleted.

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
1. Create a table `archived_loans` with columns `id`, `book_id`, `member_id`, `borrowed_on`, `returned_on`.
2. Copy every **returned** loan (`returned_on IS NOT NULL`) into it.
3. Delete those loans from `loans`.
