---
slug: "sql-recipes-rank"
title: "SQL: Rank recipes within each difficulty"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank recipes within each difficulty

Return `difficulty`, `name`, `calories` and `rank`: the `RANK()` by `calories` (highest first) **within each** `difficulty`. Order by `difficulty`, `rank`, `name`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
