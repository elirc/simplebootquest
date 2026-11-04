---
slug: "js-primes"
title: "Challenge: Primes & Factors"
type: "code"
language: "js"
xp: 20
hints: ["Numbers below 2 are not prime.", "For factors, divide by `d` for as long as it divides evenly, then try `d + 1`."]
---
# Challenge: Primes & Factors

Classic number problems are excellent loop practice, and they show up in interviews.

A **prime** is a whole number greater than 1 that's only divisible by 1 and itself. To test `n`, you only need to check divisors up to `√n`: if `n = a × b`, one of them is at most `√n`.

The **greatest common divisor** has a beautiful 2,300-year-old algorithm (Euclid's):

```js
gcd(a, b) = b === 0 ? a : gcd(b, a % b)
```

## Your task

1. `isPrime(n)`: check divisors only up to `Math.sqrt(n)`.
2. `primesUpTo(n)`: all primes `<= n`, in order.
3. `gcd(a, b)`: Euclid's algorithm.
4. `primeFactors(n)`: the prime factors in ascending order, with repeats (`12` → `[2, 2, 3]`).
