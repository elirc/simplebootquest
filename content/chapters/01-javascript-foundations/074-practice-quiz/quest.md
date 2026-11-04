---
slug: "js-practice-quiz"
title: "Checkpoint: Thinking Like a Programmer"
type: "quiz"
xp: 10
questions: [{"prompt": "You need to check thousands of items for membership repeatedly. What should you store them in?", "options": ["An array, with .includes", "A Set, with .has", "A string"], "answer": 1, "explanation": "Set lookups are constant-time, while array includes scans every element."}, {"prompt": "Naive recursive Fibonacci is slow because…", "options": ["Recursion is always slow", "It recomputes the same subproblems over and over", "JavaScript has no loops"], "answer": 1}, {"prompt": "A validator regex without ^ and $…", "options": ["Is faster", "Can match a valid substring inside invalid input", "Is required by JavaScript"], "answer": 1}, {"prompt": "Why use Intl.NumberFormat instead of building \"$\" + n.toFixed(2)?", "options": ["It is required", "It handles locales, separators and currency symbols correctly", "toFixed is deprecated"], "answer": 1}, {"prompt": "Your function has 5 levels of nested if/else. What refactor helps most?", "options": ["Guard clauses with early returns", "More comments", "Converting it to a class"], "answer": 0}]
---
# Checkpoint: Thinking Like a Programmer

These questions are about *approach*, not syntax. Answer every question correctly to earn the XP.
