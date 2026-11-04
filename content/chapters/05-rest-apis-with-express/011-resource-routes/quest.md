---
slug: "express-resource-routes"
title: "Generating Resource Routes"
type: "code"
language: "js"
xp: 15
hints: ["Build the base path first, then reuse it for all five routes.", "An odd number of segments ends in a collection name."]
---
# Generating Resource Routes

Every REST resource gets the same five routes. Frameworks like Rails generate them from one line (`resources :posts`). Seeing them as **data** makes the conventions obvious:

| Method | Path | Action |
|--------|------|--------|
| GET | /posts | list |
| GET | /posts/:id | show |
| POST | /posts | create |
| PATCH | /posts/:id | update |
| DELETE | /posts/:id | destroy |

Nested resources are scoped by their parent: `/posts/:postId/comments`.

## Your task

1. `resourceRoutes(name, { parent } = {})` returns the five routes as `{ method, path, action }` objects, in the order above. With a `parent` (e.g. `'posts'`), paths are prefixed with `/posts/:postId` (the singular of the parent name: just drop a trailing `s`).
2. `describeRoute(method, path)` returns the action name for a path like `/posts/42` or `/posts/7/comments/3`, or `null` if it doesn't fit the conventions. (Hint: it's a collection if the number of segments is odd.)
