---
slug: "async-practice-quiz"
title: "Checkpoint: Async Patterns in Practice"
type: "quiz"
xp: 15
optional: true
section: "Practice"
questions: [{"prompt": "What does `items.filter(async (x) => check(x))` do?", "options": ["Filters correctly", "Keeps every item, because a promise is always truthy", "Throws an error"], "answer": 1}, {"prompt": "50 components each call loadUser(id) in the same render. Which pattern reduces this to one request?", "options": ["Debounce", "A DataLoader-style batcher", "Retry"], "answer": 1}, {"prompt": "A slow, older search response overwrites a newer one. What is the fix?", "options": ["A longer timeout", "Ignore stale results (latest-only or AbortController)", "Run requests sequentially"], "answer": 1}, {"prompt": "You must report every failure from 20 parallel tasks. What should you use?", "options": ["Promise.all", "Promise.allSettled (then an AggregateError)", "Promise.race"], "answer": 1}, {"prompt": "Why might you use a deferred promise?", "options": ["To make code synchronous", "To resolve a promise from outside its executor, e.g. when an event fires", "To cancel a fetch"], "answer": 1}]
---
# Checkpoint: Async Patterns in Practice

Answer every question correctly to earn the XP.
