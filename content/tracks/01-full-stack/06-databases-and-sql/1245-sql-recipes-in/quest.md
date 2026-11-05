---
slug: "sql-recipes-in"
title: "SQL: Recipes in some difficultys"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Recipes in some difficultys

Return `id` and `name` of recipes whose `difficulty` is 'easy' or 'hard', ordered by `id`. Use `IN`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
