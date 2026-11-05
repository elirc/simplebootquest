---
slug: "sql-recipes-having"
title: "SQL: Difficultys with several recipes"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Difficultys with several recipes

Return `difficulty` and `total` for groups that have **at least 2** recipes, ordered by `difficulty`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
