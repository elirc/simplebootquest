---
slug: testing-mock-functions
title: Build a Mock Function
type: code
language: js
xp: 25
---
# Build a Mock Function

A **mock** (or spy) is a fake function that records how it was called and returns whatever you tell it to. Vitest's `vi.fn()`:

```js
const sendEmail = vi.fn().mockResolvedValue({ id: 'msg_1' });
await signup({ email: 'a@b.c' }, { sendEmail });
expect(sendEmail).toHaveBeenCalledTimes(1);
expect(sendEmail).toHaveBeenCalledWith('a@b.c', expect.any(String));
```

Mocks are great for **side effects you don't want in tests**: emails, payments, third-party APIs. But be careful: every mock is an assumption about how the real thing behaves. Over-mocking leads to tests that pass while production breaks. Prefer real collaborators (an in-memory repo, a test database) when you can.

## Your task

Implement `fn(impl?)`, which returns a callable mock:

- Calling it records the arguments in `mock.calls` (an array of argument arrays) and the return value in `mock.results`.
- By default it calls `impl` (if provided) and returns its result, otherwise `undefined`.
- `mockReturnValue(v)`: always return `v`. It returns the mock, so calls can be chained.
- `mockReturnValueOnce(v)`: return `v` for the next call only. Several of these queue up in order, and they take priority over everything else.
- `mockImplementation(f)`: replace the implementation. Chainable.
- `mockReset()`: clears calls and results and removes all configured behaviour.
- `mock.lastCall`: the last call's arguments, or `undefined`.

Functions are objects, so you can attach properties to them.
