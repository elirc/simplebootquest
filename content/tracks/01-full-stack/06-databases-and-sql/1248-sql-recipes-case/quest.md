---
slug: "sql-recipes-case"
title: "SQL: Label recipes by calories"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Label recipes by calories

Return `name` and `band`: `'high'` when `calories` ≥ 651, `'low'` when it's below 253, otherwise `'medium'`. Order by `name`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
