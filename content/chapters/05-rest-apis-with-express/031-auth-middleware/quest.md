---
slug: "express-require-role"
title: "Auth Middleware Factories"
type: "code"
language: "js"
xp: 20
hints: ["A factory is `(...roles) => (req, res, next) => { ... }`.", "`return res.status(...).json(...)` both responds and stops the function."]
---
# Auth Middleware Factories

Middleware that needs configuration is written as a **factory**: a function that returns the middleware.

```js
app.delete('/posts/:id', requireAuth, requireRole('admin', 'editor'), deletePost);
```

Order matters. `requireAuth` runs first and attaches `req.user`, then `requireRole` checks it.

| Situation | Status |
|-----------|--------|
| No user (not logged in) | **401 Unauthorized** |
| Logged in, wrong role | **403 Forbidden** |

## Your task

1. `requireAuth(req, res, next)`: if `req.user` is missing, respond `401` with `{ error: 'Authentication required' }`, otherwise call `next()`.
2. `requireRole(...roles)` returns middleware that responds `403` with `{ error: 'Forbidden' }` unless `req.user.role` is one of `roles`. If there's no user, it responds `401` like `requireAuth`.
3. `requireOwnerOrRole(getOwnerId, ...roles)`: allows the request if `getOwnerId(req) === req.user.id` or the user has one of the roles.
