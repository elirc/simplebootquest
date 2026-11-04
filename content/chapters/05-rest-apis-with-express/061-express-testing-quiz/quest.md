---
slug: "express-testing-quiz"
title: "Checkpoint: Express in Practice"
type: "quiz"
xp: 15
questions: [{"prompt": "Why split `app.ts` (createApp) from `server.ts` (listen)?", "options": ["Performance", "Tests can create the app and call it with Supertest without opening a port", "Express requires it"], "answer": 1}, {"prompt": "In Express 4, what happens to an error thrown inside an async route handler without a wrapper?", "options": ["It reaches the error handler", "It becomes an unhandled rejection and the request hangs", "Express retries the handler"], "answer": 1}, {"prompt": "A logged-in member tries an admin-only route. Which status?", "options": ["401", "403", "404"], "answer": 1}, {"prompt": "Where should you register the error-handling middleware?", "options": ["First", "After all routes", "Anywhere"], "answer": 1}, {"prompt": "What should a successful POST that creates a resource return?", "options": ["200 with the id", "201 with the resource and a Location header", "204"], "answer": 1}, {"prompt": "Why might a payment API ask for an Idempotency-Key header?", "options": ["Authentication", "So retries of the same operation are not executed twice", "Caching GET requests"], "answer": 1}]
---
# Checkpoint: Express in Practice

Answer every question correctly to earn the XP.
