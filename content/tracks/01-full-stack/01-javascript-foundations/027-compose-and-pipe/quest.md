---
slug: "js-compose-and-pipe"
title: "Composing Functions"
type: "code"
language: "js"
xp: 15
hints: ["`fns.reduce((value, fn) => fn(value), input)` is the whole of `pipe`.", "Copy before reversing, because `.reverse()` mutates the array."]
---
# Composing Functions

Small functions combine into bigger ones. `pipe` runs functions left to right, feeding each result into the next:

```js
const slugify = pipe(trim, toLowerCase, replaceSpaces);
slugify('  Hello World ');  // 'hello-world'
```

It's like an assembly line, the same idea as Express middleware or Unix pipes (`cat file | grep x | sort`).

`reduce` is the natural tool: start with the input value and apply each function in turn.

## Your task

1. `pipe(...fns)` returns a function of one argument that applies `fns` left to right. With no functions, it returns the input unchanged.
2. `compose(...fns)` is the same, but applies **right to left** (like maths: `f(g(x))`).
3. Use `pipe` to build `normaliseEmail`, which trims, lowercases, and removes any `+tag` from the part before the `@` (`" Ada+news@Example.com "` → `"ada@example.com"`).
