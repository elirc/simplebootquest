---
slug: "crud-p-ownership"
title: "Practice: Scoping Queries to the Current User"
type: "code"
language: "js"
xp: 15
hints: ["Write one helper, `own(userId, id)`, that finds by BOTH fields or throws. Reuse it in get, update and remove."]
resources: [{"title": "OWASP: Insecure Direct Object Reference Prevention", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html"}]
---
# Practice: Scoping Queries to the Current User

The most common serious bug in CRUD apps is **IDOR** (Insecure Direct Object Reference): `GET /todos/42` returns todo 42 **even though it belongs to someone else**, because the handler only looked up by id.

The fix is to scope *every* query by the owner:

```js
prisma.todo.findFirst({ where: { id, userId: req.user.id } })   // ✅
prisma.todo.findUnique({ where: { id } })                         // ❌ anyone's todo
```

And return **404, not 403**, so attackers can't even learn which ids exist.

## Your task
Write `createTodoService(repo)`. `repo` has `findMany(where)`, `findOne(where)`, `insert(data)`, `update(id, data)` and `remove(id)`. Return:
- `list(userId)`: the user's todos only.
- `get(userId, id)`: the todo if it belongs to the user, else throw `NotFoundError` (already defined, with `status` 404).
- `create(userId, { title })`: inserts `{ title, done: false, userId }`. The owner comes from the **session**, never from the request body.
- `update(userId, id, changes)`: only `title` and `done` may change. Check ownership first (throw `NotFoundError`).
- `remove(userId, id)`: check ownership first.
