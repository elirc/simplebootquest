---
slug: "sql-repos-count"
title: "SQL: Count repos per language"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count repos per language

Return `language` and `total` (the number of repos) for each `language`, ordered by `total` descending, then `language`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
