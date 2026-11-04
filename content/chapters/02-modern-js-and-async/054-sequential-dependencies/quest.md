---
slug: "js-sequential-dependencies"
title: "When Order Matters"
type: "code"
language: "js"
xp: 20
hints: ["You can ignore the first result while destructuring: `const [, customer] = await Promise.all(...)`.", "Draw the dependency graph first. Only `charge` must wait."]
---
# When Order Matters

Parallel is faster, but only when tasks are **independent**. Some workflows have real dependencies:

```js
const user = await createUser(input);               // need the id…
const account = await createAccount(user.id);       // …to create the account
await Promise.all([sendWelcome(user), track(user)]); // these two are independent
```

The skill is spotting which steps depend on which, and parallelising everything else.

## Your task

Implement `checkout(api, cart)`:

1. **In parallel**: `api.validateStock(cart.items)` and `api.getCustomer(cart.customerId)`.
2. Then `api.charge(customer, total)`, where `total` is the sum of `price * qty`. This needs the customer.
3. Then **in parallel**: `api.sendReceipt(customer.email, payment.id)` and `api.reserveStock(cart.items)`.
4. Resolve to `{ paymentId, total }`.

If any step fails, the whole checkout rejects (and later steps must not run). The test records the timeline of calls.
