---
slug: "auth-p-constant-time"
title: "Practice: Constant-Time Comparison"
type: "code"
language: "js"
xp: 15
hints: ["`x ^ y` is 0 only when x equals y. OR-ing many of those together stays 0 only if every pair matched."]
resources: [{"title": "Node.js: crypto.timingSafeEqual", "url": "https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b"}]
---
# Practice: Constant-Time Comparison

`a === b` on strings stops at the **first different character**. Comparing a secret token that way leaks, through response timing, how many leading characters an attacker guessed right. With enough requests they can recover the token one character at a time.

Node has `crypto.timingSafeEqual(bufA, bufB)`. The idea is simple: always look at **every** character, and combine the differences with bitwise OR so there's no early exit.

## Your task
Write `safeEqual(a, b)` for strings:
- If the lengths differ, return `false` (the length of a token isn't secret), but still loop over `a` so the work done doesn't depend on where the strings differ.
- Otherwise XOR each pair of char codes and OR the results into an accumulator. Return `accumulator === 0`.
- No early `return` inside the loop, and no `===` on the whole strings.
