---
slug: "sql-recipes-count"
title: "SQL: Count recipes per difficulty"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count recipes per difficulty

Return `difficulty` and `total` (the number of recipes) for each `difficulty`, ordered by `total` descending, then `difficulty`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
