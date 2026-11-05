---
slug: "sql-recipes-bool"
title: "SQL: Count vegetarian recipes"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Count vegetarian recipes

Booleans are stored as 0/1 in SQLite. Return `difficulty` and `total` (how many recipes have `vegetarian` = 1) per `difficulty`, including groups with zero, ordered by `difficulty`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
