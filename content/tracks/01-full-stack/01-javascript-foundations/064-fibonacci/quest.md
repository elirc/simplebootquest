---
slug: "js-fibonacci"
title: "Challenge: Fibonacci, Three Ways"
type: "code"
language: "js"
xp: 20
hints: ["Swap with destructuring: `[a, b] = [b, a + b]`.", "In `fibMemo`, pass `memo` along in the recursive calls!"]
resources: [{"title": "Big-O cheat sheet", "url": "https://www.bigocheatsheet.com/"}]
---
# Challenge: Fibonacci, Three Ways

The Fibonacci sequence: `0, 1, 1, 2, 3, 5, 8, 13, …`, where each number is the sum of the two before it.

It's the classic example for comparing approaches:

1. **Naive recursion**: `fib(n) = fib(n-1) + fib(n-2)`. Beautiful, but it recomputes the same values exponentially many times. `fib(40)` takes seconds.
2. **Memoised recursion**: cache results, so each `n` is computed once.
3. **Iteration**: keep just the last two numbers. Fast, and uses constant memory.

Thinking about *how much work* an approach does is the beginning of **algorithmic complexity** (Big-O).

## Your task

1. `fibIterative(n)` uses a loop.
2. `fibMemo(n, memo = new Map())` uses recursion with a cache.
3. `fibSequence(count)` returns the first `count` Fibonacci numbers.

`fib(0)` is 0 and `fib(1)` is 1. The tests call `fib(80)`, so the naive version won't finish in time!
