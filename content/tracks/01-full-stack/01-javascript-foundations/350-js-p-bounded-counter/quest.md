---
slug: "js-p-bounded-counter"
title: "Practice: A Bounded Counter Class"
type: "code"
language: "js"
xp: 15
hints: ["A private `#set(v)` helper can clamp and record history in one place."]
---
## Your task
Write `class Counter`:

- `constructor({ start = 0, min = -Infinity, max = Infinity, step = 1 } = {})`. Throw a `RangeError` if `start` is outside `[min, max]`.
- `increment()` / `decrement()` move by `step`, but **clamp** at the bounds. They return `this`, so calls can be chained.
- `reset()` goes back to `start`.
- `value` is a getter.
- `history` is a getter returning a copy of every value the counter has held, in order (starting with `start`).
