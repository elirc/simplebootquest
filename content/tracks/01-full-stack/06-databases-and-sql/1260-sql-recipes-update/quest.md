---
slug: "sql-recipes-update"
title: "SQL: Update recipes in one difficulty"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Update recipes in one difficulty

Write an `UPDATE` that adds 10 to `calories` for every recipe whose `difficulty` is 'easy'. Nothing else may change.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
