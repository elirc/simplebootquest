---
slug: "sql-recipes-above-avg"
title: "SQL: Recipes above the average calories"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Recipes above the average calories

Return the `name`s of recipes whose `calories` is above the overall average, ordered by `name`. Use a subquery.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
