---
slug: "sql-repos-update"
title: "SQL: Update repos in one language"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update repos in one language

Write an `UPDATE` that adds 10 to `open_issues` for every repo whose `language` is 'Go'. Nothing else may change.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
