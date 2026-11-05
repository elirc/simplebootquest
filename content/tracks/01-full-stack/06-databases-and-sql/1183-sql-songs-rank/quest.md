---
slug: "sql-songs-rank"
title: "SQL: Rank songs within each artist"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Rank songs within each artist

Return `artist`, `title`, `seconds` and `rank`: the `RANK()` by `seconds` (highest first) **within each** `artist`. Order by `artist`, `rank`, `title`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
