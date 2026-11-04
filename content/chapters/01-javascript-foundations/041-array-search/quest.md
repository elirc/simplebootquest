---
slug: "js-array-search"
title: "Finding Things in Arrays"
type: "code"
language: "js"
xp: 10
hints: ["Lowercase *both* sides before comparing emails.", "`[].every(...)` is `true`, which is exactly what we want here."]
---
# Finding Things in Arrays

```js
const users = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Grace' }];

users.find((u) => u.id === 2);        // { id: 2, name: 'Grace' }  (or undefined)
users.findIndex((u) => u.id === 2);   // 1                         (or -1)
users.some((u) => u.name === 'Ada');  // true  — at least one matches
users.every((u) => u.id > 0);         // true  — all match
[1, 2, 3].includes(2);                // true  — for primitive values
[1, 2, 3].indexOf(3);                 // 2
```

`find`, `some` and `every` stop as soon as they know the answer. `includes` and `indexOf` compare with `===`, so they don't work for "an object with id 2". Use `find` or `some` for that.

## Your task

1. `findUserByEmail(users, email)` finds a user by email, **case-insensitively**. Return `undefined` if there's none.
2. `allCompleted(todos)` is `true` if every todo is done. An empty list counts as all done.
3. `anyOverdue(todos, today)` is `true` if any todo has a `due` date (`"YYYY-MM-DD"`) before `today` and isn't done.
4. `positionOf(todos, id)` returns the 1-based position (`1` is first), or `null`.
