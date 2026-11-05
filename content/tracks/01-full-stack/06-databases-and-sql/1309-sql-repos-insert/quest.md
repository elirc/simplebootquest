---
slug: "sql-repos-insert"
title: "SQL: Insert a new repo"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new repo

Insert a repo with id 100, `name` 'New repo', `open_issues` 87, `stars` 0, `language` 'Go', `archived` 0. Then return how many repos have that `language` as `total`.

Tables: `repos` and `repo_events` (open the setup to see the data). Column names in SQL are snake_case.
