---
slug: "sql-p-overdue-loans"
title: "Practice: Date Arithmetic"
type: "code"
language: "sql"
xp: 20
optional: true
section: "Practice"
hints: ["`CAST(x AS INTEGER)` drops the fractional part."]
---
# Practice: Date Arithmetic

SQLite's `julianday(date)` turns a date into a number of days, so subtracting two of them gives the days between. (In PostgreSQL, `date - date` gives an integer directly.)

This quest uses the **library** database: `authors`, `books`, `members` and `loans`.

## Your task
Treat **2026-02-20** as today. A loan is overdue when it hasn't been returned and it was borrowed **more than 14 days** ago. Return `member`, `title` and `days_out` (an integer number of days) for overdue loans, ordered by `days_out` descending.
