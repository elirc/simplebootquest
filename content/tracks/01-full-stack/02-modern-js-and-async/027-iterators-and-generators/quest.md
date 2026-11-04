---
slug: "js-generators"
title: "Iterators & Generators"
type: "code"
language: "js"
xp: 20
hints: ["`while (true) yield n++` is fine inside a generator, because it pauses at every `yield`.", "`take` must `break` out of the loop instead of spreading the iterable."]
resources: [{"title": "javascript.info: Generators", "url": "https://javascript.info/generators"}]
---
# Iterators & Generators

Anything you can loop over with `for...of` (arrays, strings, Maps, Sets) implements the **iterator protocol**. A **generator function** (`function*`) is the easiest way to create your own:

```js
function* countTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;          // pause here and hand back a value
  }
}

[...countTo(3)];      // [1, 2, 3]
for (const n of countTo(2)) console.log(n);
```

Generators are **lazy**: values are produced on demand, so a generator can even be infinite. You'll meet the same idea in Node streams and in paginated API clients that fetch the next page only when needed.

## Your task

1. `function* range(start, end, step = 1)` yields numbers from `start` up to (not including) `end`.
2. `function* naturals()` yields `1, 2, 3, …` forever.
3. `take(iterable, n)` returns an array of the first `n` values (must work with infinite generators!).
4. `function* mapIter(iterable, fn)` lazily yields `fn(value)` for each value.
