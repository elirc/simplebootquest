---
slug: "sql-concepts-quiz"
title: "Checkpoint: SQL Concepts"
type: "quiz"
xp: 15
questions: [{"prompt": "Why does `COUNT(*)` with a LEFT JOIN report 1 for a parent with no children?", "options": ["It is a bug in SQL", "The NULL-filled row is still a row; use COUNT(child.id) instead", "LEFT JOIN always adds a row"], "answer": 1}, {"prompt": "What does `WHERE x = NULL` return?", "options": ["Rows where x is NULL", "No rows: use IS NULL", "An error"], "answer": 1}, {"prompt": "Which clause filters groups after aggregation?", "options": ["WHERE", "HAVING", "ORDER BY"], "answer": 1}, {"prompt": "How do you get the top book per genre while keeping the book rows?", "options": ["GROUP BY genre", "A window function like ROW_NUMBER() OVER (PARTITION BY genre ...)", "DISTINCT"], "answer": 1}, {"prompt": "What do transactions guarantee?", "options": ["Speed", "All statements in the transaction succeed or none do (atomicity)", "That queries use indexes"], "answer": 1}, {"prompt": "What is the downside of adding an index?", "options": ["Reads get slower", "Writes get slower and it uses more storage", "None"], "answer": 1}, {"prompt": "Why is `INSERT ... ON CONFLICT DO UPDATE` better than SELECT-then-INSERT?", "options": ["Shorter", "It is atomic, so there is no race between the check and the insert", "It skips constraints"], "answer": 1}]
---
# Checkpoint: SQL Concepts

Answer every question correctly to earn the XP.
