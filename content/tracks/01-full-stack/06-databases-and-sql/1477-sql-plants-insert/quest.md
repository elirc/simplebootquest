---
slug: "sql-plants-insert"
title: "SQL: Insert a new plant"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Insert a new plant

Insert a plant with id 100, `name` 'New plant', `water_every_days` 9, `height_cm` 5, `light` 'bright', `pet_safe` 0. Then return how many plants have that `light` as `total`.

Tables: `plants` and `plant_events` (open the setup to see the data). Column names in SQL are snake_case.
