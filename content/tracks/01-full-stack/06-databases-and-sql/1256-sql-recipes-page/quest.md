---
slug: "sql-recipes-page"
title: "SQL: Page 2 of recipes"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Page 2 of recipes

Return the `id` and `name` of the **second page** of recipes sorted by `name`, with 3 per page.

Tables: `recipes` and `recipe_events` (open the setup to see the data). Column names in SQL are snake_case.
