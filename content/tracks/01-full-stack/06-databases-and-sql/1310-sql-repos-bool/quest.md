---
slug: "sql-repos-bool"
title: "SQL: Count archived repos"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count archived repos

Booleans are stored as 0/1 in SQLite. Return `language` and `total` (how many repos have `archived` = 1) per `language`, including groups with zero, ordered by `language`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
