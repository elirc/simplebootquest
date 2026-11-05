---
slug: "sql-repos-between"
title: "SQL: Repos in a open issues range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Repos in a open issues range

Return the `name`s of repos with `open_issues` between 67 and 121 (inclusive), ordered by `open_issues`, then `name`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
