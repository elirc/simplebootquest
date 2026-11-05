---
slug: "sql-recipes-where"
title: "SQL: Recipes with calories above 467"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Recipes with calories above 467

Return the `name` and `calories` of recipes whose `calories` is greater than 467, ordered by `calories` descending, then `name`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
