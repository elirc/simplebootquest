---
slug: crud-http-handlers
title: HTTP Handlers
type: code
language: ts
xp: 30
---
# HTTP Handlers

Handlers are the thin outer layer. They:

1. Read input from `req` (params, query, body, the authenticated user).
2. Call the service.
3. Translate the result, or the error, into an HTTP response.

```ts
export function createTodoHandlers(service: TodoService) {
  return {
    async get(req, res) {
      const id = Number(req.params.id);
      res.json(await service.get(req.user.id, id));
    },
  };
}
```

Because the service is injected, you can test handlers with a fake service and fake `req`/`res` objects. That's exactly what the tests here do.

### Parsing route params

`req.params.id` is a **string**. `Number('abc')` is `NaN`, and `NaN` will reach your database query. Validate it: a positive integer, or `400`.

## Your task

Implement `createTodoHandlers(service)` returning `{ list, get, create, update, remove }`. Each handler is `async (req, res)`, and `req.user.id` is the logged-in user.

| Handler | Calls | Success response |
|---------|-------|------------------|
| `list` | `service.list(userId)` | `200` + `{ data: todos }` |
| `get` | `service.get(userId, id)` | `200` + the todo |
| `create` | `service.create(userId, req.body)` | `201` + the todo |
| `update` | `service.update(userId, id, req.body)` | `200` + the todo |
| `remove` | `service.remove(userId, id)` | `204` with `res.end()` |

Error handling, inside each handler:

- An invalid `:id` (not a positive integer) → `400` + `{ error: 'Invalid id' }`, without calling the service.
- `NotFoundError` (provided in scope) → `404` + `{ error: err.message }`.
- `ValidationError` (provided in scope) → `400` + `{ error: err.message }`.
- Any other error → rethrow it (the global error handler deals with it).
