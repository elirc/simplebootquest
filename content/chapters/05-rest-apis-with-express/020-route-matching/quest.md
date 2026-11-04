---
slug: express-route-matching
title: Route Matching
type: code
language: js
xp: 20
---
# Route Matching

When you write `app.get('/users/:userId/posts/:postId', handler)`, Express has to:

1. Check whether the incoming path matches the pattern.
2. Extract the named segments into `req.params`.

```js
// pattern: /users/:userId/posts/:postId
// path:    /users/42/posts/7
// params:  { userId: '42', postId: '7' }
```

Build a tiny router yourself and you'll never be confused by route ordering again. Express checks routes **in the order you registered them** and uses the first match.

## Your task

1. `matchPath(pattern, path)` returns a params object if the path matches, or `null` if it doesn't.
   - Segments starting with `:` match any **non-empty** segment.
   - Other segments must match exactly.
   - A trailing slash on the path is ignored (`/todos/` matches `/todos`).
   - Param values are URI-decoded (`%20` becomes a space).
2. `createRouter()` returns `{ add(method, pattern, handler), handle(method, path) }`. `handle` finds the **first** route whose method and pattern match and returns `handler(params)`. If nothing matches, return `{ status: 404 }`.
