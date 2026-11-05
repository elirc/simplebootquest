---
slug: "sql-repos-cte"
title: "SQL: Languages above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Languages above the overall average

Using a CTE, compute the average `open_issues` per `language`, then return the `language`s whose average is above the overall average of `open_issues`, ordered by `language`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
