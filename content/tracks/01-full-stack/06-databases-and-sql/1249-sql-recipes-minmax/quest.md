---
slug: "sql-recipes-minmax"
title: "SQL: Range of calories per difficulty"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Range of calories per difficulty

Return `difficulty`, `min_calories` and `max_calories` per `difficulty`, ordered by `difficulty`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
