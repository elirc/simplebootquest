---
slug: "async-q-choose-method"
title: "Quiz: Choosing the Right Array Method"
type: "quiz"
xp: 15
questions: [{"prompt": "You need the first user with role \"admin\". Which method?", "options": ["filter()[0]", "find", "map"], "answer": 1, "explanation": "`find` stops at the first match; `filter` scans everything."}, {"prompt": "Does any order exceed $1,000?", "options": ["some", "every", "reduce"], "answer": 0}, {"prompt": "Each order has items; you want one flat list of all items.", "options": ["map", "flatMap", "concat in a loop"], "answer": 1}, {"prompt": "You only want to send an email per user (no new array).", "options": ["map", "for...of / forEach", "filter"], "answer": 1}, {"prompt": "Total revenue from an array of orders:", "options": ["reduce", "find", "some"], "answer": 0}]
---
# Quiz: Choosing the Right Array Method

| Need | Method |
|------|--------|
| Transform every item | `map` |
| Keep some items | `filter` |
| One value from many | `reduce` |
| First match | `find` / `findIndex` |
| Any / all match? | `some` / `every` |
| Map + flatten | `flatMap` |
| Side effects only | `for...of` (or `forEach`) |

Choosing the precise method documents your intent, and lets `find`/`some` stop early.
