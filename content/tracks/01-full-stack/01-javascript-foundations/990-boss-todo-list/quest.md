---
slug: js-boss-todo-list
title: "Boss: In-Memory Todo List"
type: code
language: js
xp: 50
boss: true
hints: ["Write a private `find(id)` helper inside `createTodoList` and reuse it.", "For `remove`, `findIndex` then `splice` — or rebuild the array with `filter`.", "Write a `cleanTitle` helper that trims and throws, and use it in both `add` and `rename`."]
---
# Boss: In-Memory Todo List

Time to combine everything. You'll build the **heart of every CRUD app**, a collection you can Create, Read, Update and Delete from. Later chapters will put this exact logic behind an HTTP API and a database.

Implement `createTodoList()`, which returns an object with these methods:

| Method | Behaviour |
|--------|-----------|
| `add(title)` | Creates `{ id, title, done: false }` and returns it. Ids start at `1` and increase. Titles are trimmed. Throw an `Error` if the title is empty. |
| `list()` | Returns a **copy** of all todos, in insertion order. |
| `get(id)` | Returns the todo with that id, or `undefined`. |
| `toggle(id)` | Flips `done` and returns the updated todo. Returns `undefined` if not found. |
| `rename(id, title)` | Updates the title (same rules as `add`) and returns the todo, or `undefined`. |
| `remove(id)` | Deletes the todo. Returns `true` if something was deleted, `false` otherwise. |
| `stats()` | Returns `{ total, done, remaining }`. |

Ids are **never reused**, even after deleting.

Use a closure to keep the todos array private, the same way `makeCounter` kept its count.
