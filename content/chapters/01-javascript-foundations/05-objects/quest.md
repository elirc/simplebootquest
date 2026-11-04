---
slug: js-objects
title: Objects
type: code
language: js
xp: 15
---
# Objects

Objects group related data under named keys. In a web app, every record (a user, a todo, a blog post) is an object.

```js
const user = { id: 1, name: 'Ada', email: 'ada@example.com' };

user.name;          // 'Ada'      — dot access
user['email'];      // bracket access (useful when the key is in a variable)
user.isAdmin = true; // add a property

Object.keys(user);    // ['id', 'name', 'email', 'isAdmin']
Object.entries(user); // [['id', 1], ['name', 'Ada'], ...]
```

### Objects as lookup tables

Objects are perfect for counting and grouping, because looking up a key is fast:

```js
const counts = {};
for (const fruit of ['apple', 'pear', 'apple']) {
  counts[fruit] = (counts[fruit] ?? 0) + 1;
}
// { apple: 2, pear: 1 }
```

`??` is the **nullish coalescing** operator. It returns the right side only when the left side is `null` or `undefined`.

## Your task

1. `countWords(text)` returns an object mapping each word to how many times it appears. Words are separated by whitespace and should be compared **case-insensitively** (store them lowercase). An empty or whitespace-only string returns `{}`.
2. `pick(obj, keys)` returns a **new** object containing only the listed keys that exist on `obj`.

Hint: `text.trim().split(/\s+/)` splits on any run of whitespace.
