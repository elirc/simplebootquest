---
slug: "sql-recipes-insert"
title: "SQL: Insert a new recipe"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new recipe

Insert a recipe with id 100, `name` 'New recipe', `calories` 467, `minutes` 10, `difficulty` 'easy', `cuisine` 'italian', `vegetarian` 0. Then return how many recipes have that `difficulty` as `total`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
