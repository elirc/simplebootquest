---
slug: js-arrays
title: Arrays
type: code
language: js
xp: 15
hints: ["An even number satisfies `n % 2 === 0`.", "Start `largest` with `numbers[0]` and compare every element against it.", "`[...numbers]` makes a copy you can safely sort."]
resources: [{"title": "MDN: Array", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"}, {"title": "javascript.info: Arrays", "url": "https://javascript.info/array"}]
---
# Arrays

An array is an ordered list. In a CRUD app, almost every "list" screen is an array of records.

```js
const todos = ['buy milk', 'write code'];
todos.length;        // 2
todos[0];            // 'buy milk'
todos.push('sleep'); // adds to the end
todos.includes('write code'); // true
```

### Looping over arrays

```js
for (const todo of todos) {
  console.log(todo);
}
```

### Don't mutate what you don't own

Methods like `push`, `pop`, `splice` and `sort` **change the original array**. That causes painful bugs in React, where state must never be mutated. Prefer creating new arrays:

```js
const withNew = [...todos, 'new item'];          // spread copy + add
const sorted = [...numbers].sort((a, b) => a - b); // copy, then sort
```

Note the `(a, b) => a - b`: without it, `sort` compares numbers **as strings**, so `[10, 9, 1].sort()` gives `[1, 10, 9]`.

## Your task

1. `sumEvens(numbers)` returns the sum of the even numbers in the array.
2. `largest(numbers)` returns the biggest number, or `undefined` for an empty array.
3. `sortedCopy(numbers)` returns a **new** array sorted ascending. The original must not change.
