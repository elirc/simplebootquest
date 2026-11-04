---
slug: "js-switch"
title: "switch Statements"
type: "code"
language: "js"
xp: 10
hints: ["Uppercase the method before switching on it.", "Stack `case \"PUT\":` and `case \"PATCH\":` with no code between them."]
---
# switch Statements

`switch` compares one value against many cases with `===`:

```js
switch (method) {
  case 'GET':
    return 'read';
  case 'POST':
    return 'create';
  case 'PUT':
  case 'PATCH':          // fall-through: both cases share the code below
    return 'update';
  case 'DELETE':
    return 'delete';
  default:
    return 'unknown';
}
```

Without `return` or `break`, execution **falls through** into the next case. Sometimes that's intended (like `PUT`/`PATCH` above), but it's often a bug.

For simple value lookups, an object map is often cleaner:

```js
const ACTIONS = { GET: 'read', POST: 'create' };
ACTIONS[method] ?? 'unknown';
```

## Your task

1. `crudAction(method)` maps HTTP methods to CRUD words as above (case-insensitive input). Use a `switch`.
2. `statusCategory(code)` returns `"success"` (200–299), `"redirect"` (300–399), `"client error"` (400–499), `"server error"` (500–599), or `"unknown"`. Use `switch (true)` or `if` statements, whichever reads better to you.
3. `dayName(index)` returns `"Sunday"` … `"Saturday"` for 0–6 using an **array lookup**, or `"Invalid"`.
