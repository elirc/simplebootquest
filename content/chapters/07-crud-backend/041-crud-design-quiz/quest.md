---
slug: "crud-design-quiz"
title: "Checkpoint: Backend Design Choices"
type: "quiz"
xp: 15
questions: [{"prompt": "Users browse page 500 of a huge feed and it is slow. What helps most?", "options": ["A bigger server", "Cursor pagination instead of OFFSET", "Removing ORDER BY"], "answer": 1}, {"prompt": "A PATCH body is `{ \"notes\": null }`. What should happen to notes?", "options": ["Nothing", "It should be cleared", "It is a validation error"], "answer": 1}, {"prompt": "Two users save the same document at once and one edit vanishes. Which technique detects this?", "options": ["Soft deletes", "Optimistic concurrency with a version column", "Caching"], "answer": 1}, {"prompt": "Prisma throws P2002 on create. Which status should the API return?", "options": ["400", "404", "409"], "answer": 2}, {"prompt": "Why use a serializer instead of res.json(dbRow)?", "options": ["Speed", "So new or sensitive columns are never exposed by accident", "JSON requires it"], "answer": 1}, {"prompt": "What is the main risk of soft deletes?", "options": ["They use more CPU", "Forgetting the deletedAt filter in one query leaks deleted data", "They cannot be undone"], "answer": 1}]
---
# Checkpoint: Backend Design Choices

Answer every question correctly to earn the XP.
