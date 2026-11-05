---
slug: "sql-songs-having"
title: "SQL: Artists with several songs"
type: "code"
language: "sql"
xp: 15
optional: true
section: "Practice: SQL Queries"
hints: ["Start from `SELECT * FROM …` to look at the data, then add one clause at a time.","Check the exact column names and aliases the task asks for: tests compare them."]
---
# SQL: Artists with several songs

Return `artist` and `total` for groups that have **at least 2** songs, ordered by `artist`.

Tables: `songs` and `song_events` (open the setup to see the data). Column names in SQL are snake_case.
