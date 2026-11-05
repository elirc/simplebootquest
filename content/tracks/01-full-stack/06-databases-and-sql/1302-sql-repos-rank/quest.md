---
slug: "sql-repos-rank"
title: "SQL: Rank repos within each language"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank repos within each language

Return `language`, `name`, `open_issues` and `rank`: the `RANK()` by `open_issues` (highest first) **within each** `language`. Order by `language`, `rank`, `name`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
