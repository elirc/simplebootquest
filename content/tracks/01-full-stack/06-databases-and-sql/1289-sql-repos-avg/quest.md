---
slug: "sql-repos-avg"
title: "SQL: Average open issues per language"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Average open issues per language

Return `language` and `avg_open_issues` (the average `open_issues` rounded to 1 decimal place) per `language`, ordered by `language`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
