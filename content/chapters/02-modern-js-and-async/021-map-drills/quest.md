---
slug: "js-map-drills"
title: "Drill: map"
type: "code"
language: "js"
xp: 10
hints: ["Each of these is one `map` call.", "Wrap object literals in parentheses inside arrow functions."]
---
# Drill: map

`map` transforms **every** element and always returns an array of the **same length**.

```js
[1, 2, 3].map((n) => n * 2);                    // [2, 4, 6]
users.map((u) => u.id);                         // pluck a field
users.map((u) => ({ ...u, name: u.name.trim() })); // transform records
items.map((item, index) => `${index}: ${item}`); // the callback also gets the index
```

If you're using `map` but ignoring the result, you wanted `forEach`. If you're dropping elements, you wanted `filter`.

## Your task

1. `ids(records)` returns the `id` of each record.
2. `toOptions(users)` returns `{ value: id, label: name }` objects (select-box options).
3. `withIndex(items)` returns `{ index, item }` objects.
4. `normalizeEmails(users)` returns new user objects with emails trimmed and lowercased.
