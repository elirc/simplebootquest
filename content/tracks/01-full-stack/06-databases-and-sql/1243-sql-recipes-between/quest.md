---
slug: "sql-recipes-between"
title: "SQL: Recipes in a calories range"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Recipes in a calories range

Return the `name`s of recipes with `calories` between 253 and 651 (inclusive), ordered by `calories`, then `name`.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
