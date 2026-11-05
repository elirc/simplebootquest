---
slug: "sql-recipes-two-cols"
title: "SQL: Sort by two columns"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Sort by two columns

Return `name`, `calories` and `minutes`, ordered by `minutes` ascending, then `calories` descending, then `name`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
