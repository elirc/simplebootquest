---
slug: "express-q-rest-conventions"
title: "Quiz: REST Conventions"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "Microsoft REST API Guidelines", "url": "https://github.com/microsoft/api-guidelines"}]
questions: [{"prompt": "Which URL best fits REST conventions for completing todo 42?", "options": ["POST /completeTodo?id=42", "PATCH /todos/42 with {\"done\": true}", "GET /todos/42/complete"], "answer": 1}, {"prompt": "Where do filters like \"only done todos\" belong?", "options": ["In the path: /todos/done", "In the query string: /todos?done=true", "In a custom header"], "answer": 1}, {"prompt": "What should `DELETE /todos/42` return on success?", "options": ["200 with the deleted item, or 204 No Content", "201 Created", "404 Not Found"], "answer": 0}, {"prompt": "A user requests `GET /todos/99`, which belongs to someone else. What do many APIs return, and why?", "options": ["403, to be explicit", "404, so the API does not reveal that the id exists", "500"], "answer": 1}, {"prompt": "Which is better for a list endpoint's response?", "options": ["A bare JSON array", "An object like { data: [...], meta: {...} }, which can grow without breaking clients"], "answer": 1}, {"prompt": "Why prefer cursor pagination over page numbers for an infinite-scroll feed?", "options": ["It is simpler", "Items inserted while scrolling don't cause duplicates or skipped items, and it stays fast for deep pages", "Page numbers are not allowed in REST"], "answer": 1}]
---
# Quiz: REST Conventions

REST isn't a standard, it's a set of conventions. Following them means other developers can guess your API without reading the docs:

| Request | Meaning | Success |
|---------|---------|---------|
| `GET /todos` | List (paginated) | 200 |
| `GET /todos/42` | One item | 200 (404 if missing) |
| `POST /todos` | Create | 201 + `Location` |
| `PATCH /todos/42` | Partial update | 200 with the updated item |
| `PUT /todos/42` | Full replace | 200 |
| `DELETE /todos/42` | Delete | 204 |

Use **plural nouns** for collections, nest only one level (`/todos/42/comments`), and put filters, sorting and pagination in the **query string**.
