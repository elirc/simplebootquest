---
slug: "async-p-curry"
title: "Practice: Currying & Partial Application"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`fn.length` is the number of declared parameters."]
---
# Practice: Currying & Partial Application

**Currying** turns `f(a, b, c)` into `f(a)(b)(c)`. **Partial application** fixes some arguments up front: `const add10 = partial(add, 10)`. Both are useful for building specialised functions from general ones (e.g. `const log = partial(logger, 'api')`).

## Your task
1. `partial(fn, ...preset)` returns a function that calls `fn(...preset, ...rest)`.
2. `curry(fn)` returns a curried version that collects arguments (one or several at a time) until it has `fn.length` of them.
