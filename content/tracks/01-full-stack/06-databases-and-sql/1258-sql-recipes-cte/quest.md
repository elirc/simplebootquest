---
slug: "sql-recipes-cte"
title: "SQL: Difficultys above the overall average"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Difficultys above the overall average

Using a CTE, compute the average `calories` per `difficulty`, then return the `difficulty`s whose average is above the overall average of `calories`, ordered by `difficulty`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
