---
slug: "sql-repos-minmax"
title: "SQL: Range of open issues per language"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of open issues per language

Return `language`, `min_open_issues` and `max_open_issues` per `language`, ordered by `language`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
