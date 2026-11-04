---
slug: express-rest-design
title: Designing REST APIs
type: quiz
xp: 15
questions:
  - prompt: "Which URL best follows REST conventions for fetching one todo?"
    options: ["GET /getTodo?id=5", "GET /todos/5", "POST /todos/fetch/5"]
    answer: 1
  - prompt: "Which method should update only the `done` field of a todo?"
    options: ["PUT", "PATCH", "POST"]
    answer: 1
    explanation: "PATCH applies a partial update. PUT replaces the whole resource."
  - prompt: "Which methods are *idempotent* (repeating them has the same effect as doing them once)?"
    options: ["POST only", "GET, PUT and DELETE", "Every method"]
    answer: 1
    explanation: "Creating with POST twice gives you two records. That's why clients don't automatically retry POSTs."
  - prompt: "How should you represent the comments belonging to post 7?"
    options: ["GET /comments-for-post-7", "GET /posts/7/comments", "GET /posts?comments=7"]
    answer: 1
  - prompt: "Where should filtering and pagination options go?"
    options: ["In the query string: /todos?done=true&page=2", "In a GET request body", "In custom headers"]
    answer: 0
resources: [{"title": "Microsoft REST API guidelines", "url": "https://github.com/microsoft/api-guidelines"}, {"title": "MDN: HTTP request methods", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}]
---
# Designing REST APIs

REST is a set of conventions for HTTP APIs. **URLs name resources (nouns), and methods say what to do (verbs).**

| Action | Method & Path | Success status |
|--------|---------------|----------------|
| List todos | `GET /todos` | 200 |
| Get one | `GET /todos/:id` | 200 (404 if missing) |
| Create | `POST /todos` | 201 + the created resource |
| Replace | `PUT /todos/:id` | 200 |
| Partially update | `PATCH /todos/:id` | 200 |
| Delete | `DELETE /todos/:id` | 204 |

**Guidelines:**

- Use plural nouns (`/todos`, not `/todo` or `/getTodos`).
- Nest only one level deep for ownership: `/posts/7/comments`.
- Put filtering, sorting and pagination in the query string: `/todos?done=false&sort=-createdAt&page=2`.
- Return errors in a consistent shape, e.g. `{ "error": "Todo not found" }`.
- Version your API (`/api/v1/...`) once outside clients depend on it.
