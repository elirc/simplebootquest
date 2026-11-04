---
slug: ts-utility-types
title: Utility Types
type: code
language: ts
xp: 20
hints: ["Filter out the `id` key and undefined values from the patch entries.", "Loop over `Object.keys(after)` for `diff`."]
resources: [{"title": "TS Handbook: Utility Types", "url": "https://www.typescriptlang.org/docs/handbook/utility-types.html"}]
---
# Utility Types

TypeScript ships with helpers that *transform* types. They're how one `Todo` definition can describe every shape your API needs.

```ts
interface Todo {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
}

type TodoUpdate = Partial<Todo>;                  // every field optional
type TodoPreview = Pick<Todo, 'id' | 'title'>;    // only some fields
type NewTodo = Omit<Todo, 'id' | 'createdAt'>;    // everything except
type FrozenTodo = Readonly<Todo>;                 // nothing can be reassigned
type TodoById = Record<number, Todo>;             // object with typed keys/values
```

A typical CRUD API in TypeScript:

```ts
function createTodo(input: NewTodo): Todo { ... }
function updateTodo(id: number, patch: Partial<NewTodo>): Todo { ... }
```

The **client can't send an `id` or `createdAt`**, because the types forbid it. The server still validates at runtime (types vanish when the code runs!), but your own code is protected at compile time.

## Your task

1. `applyPatch(entity, patch)` returns a new entity with the patch applied. Keys in the patch whose value is `undefined` are ignored. The `id` can **never** be changed, even if the patch includes one.
2. `toPreview(todo)` returns only `{ id, title }`.
3. `diff(before, after)` returns a `Partial` containing only the keys whose values changed (compare with `!==`).
