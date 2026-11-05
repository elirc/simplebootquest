---
slug: "ts-p-implements"
title: "Practice: Interfaces, implements & Access Modifiers"
type: "code"
language: "ts"
xp: 15
hints: ["`constructor(public readonly id: string, private balance: number) {}`"]
---
# Practice: Interfaces, implements & Access Modifiers

```ts
interface PaymentMethod {
  readonly id: string;
  charge(cents: number): ChargeResult;
}

class GiftCard implements PaymentMethod {
  constructor(public readonly id: string, private balance: number) {}
  charge(cents: number) { ... }
}
```

- `implements` makes the compiler check that the class satisfies the interface.
- `public` / `private` / `protected` / `readonly` in constructor parameters declare **and** assign properties.

## Your task
1. `class GiftCard implements PaymentMethod`: `charge(cents)` returns `{ ok: true, remaining }`, or `{ ok: false, reason: 'insufficient funds' }` without changing the balance. Non-positive amounts return `{ ok: false, reason: 'invalid amount' }`.
2. `class CreditCard implements PaymentMethod`: has a `limit`. It tracks `spent`, and must not exceed the limit (with the same results shape, where `remaining` is limit − spent).
3. `payWith(methods, cents)` tries each method in order, and returns the `id` of the first that succeeds, or `null`.
