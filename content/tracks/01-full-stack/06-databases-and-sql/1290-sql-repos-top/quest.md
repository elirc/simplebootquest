---
slug: "sql-repos-top"
title: "SQL: Top 3 repos by open issues"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Top 3 repos by open issues

Return the `name` and `open_issues` of the 3 repos with the highest `open_issues`. Break ties by `name`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
