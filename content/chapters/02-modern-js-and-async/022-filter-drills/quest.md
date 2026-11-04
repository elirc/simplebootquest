---
slug: "js-filter-drills"
title: "Drill: filter"
type: "code"
language: "js"
xp: 10
hints: ["`filter(Boolean)` is a well-known idiom.", "A `Set` makes `withoutIds` fast for large lists."]
---
# Drill: filter

`filter` keeps the elements for which the callback returns a **truthy** value.

```js
todos.filter((t) => !t.done);
users.filter((u) => u.role === 'admin');
values.filter(Boolean);              // removes falsy values: 0, '', null, undefined, NaN
items.filter((x, i, arr) => arr.indexOf(x) === i);  // unique (but Set is faster)
```

## Your task

1. `active(todos)`: todos that aren't done.
2. `compact(values)`: removes falsy values.
3. `search(users, text)`: users whose name contains the text, case-insensitively. Empty text returns everyone.
4. `between(numbers, min, max)`: inclusive range.
5. `withoutIds(records, idsToRemove)`: removes every record whose id is in the list.
