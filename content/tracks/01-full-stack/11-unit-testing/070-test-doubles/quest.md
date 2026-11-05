---
slug: "ut-test-doubles"
title: "Test Doubles with vi.fn()"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Assert the exact arguments with `toHaveBeenCalledWith`.", "`expect(mailer.send).not.toHaveBeenCalled()` checks that a side effect did NOT happen."]
resources: [{"title": "Vitest: Mock functions", "url": "https://vitest.dev/api/mock"}]
---
# Test Doubles with vi.fn()

When code has **side effects** (charging a card, sending an email), you test it by passing in **mock functions** and asserting how they were called:

```js
const payments = { charge: vi.fn().mockResolvedValue({ id: 'ch_1' }) };
const mailer = { send: vi.fn().mockResolvedValue(undefined) };

await placeOrder(order, { payments, mailer });

expect(payments.charge).toHaveBeenCalledWith('cus_9', 2500);
expect(mailer.send).toHaveBeenCalledTimes(1);
```

Useful pieces: `vi.fn()`, `.mockResolvedValue(v)`, `.mockRejectedValue(err)`, `.mockReturnValue(v)`, `.mock.calls`, and the matchers `toHaveBeenCalled()`, `toHaveBeenCalledTimes(n)` and `toHaveBeenCalledWith(...args)`. Use `.not` for "never called".

`placeOrder(order, { payments, mailer })`:

1. Charges `order.customerId` the total (the sum of `price * qty` over the items).
2. Then emails `order.email` with the subject `'Order confirmed'` and the charge id.
3. Returns `{ ok: true, chargeId }`.
4. If the charge fails, it does **not** send an email, and returns `{ ok: false, error: <message> }`.
5. An empty order throws `Error('Order is empty')` without charging anything.
