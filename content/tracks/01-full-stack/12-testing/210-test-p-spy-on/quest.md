---
slug: "test-p-spy-on"
title: "Practice: Build vi.spyOn"
type: "code"
language: "js"
xp: 15
hints: ["Use a `function` (not an arrow function) for the spy, so `this` can be forwarded with `original.apply(this, args)`."]
resources: [{"title": "Vitest: vi.spyOn", "url": "https://vitest.dev/api/vi.html#vi-spyon"}]
---
# Practice: Build vi.spyOn

`vi.fn()` creates a brand-new function. `vi.spyOn(object, 'method')` **wraps an existing method**: by default it still calls the original, but it records every call, can change the return value, and must be **restored** afterwards so the change doesn't leak into other tests.

## Your task
Write `spyOn(obj, name)`. It replaces `obj[name]` with a spy and returns that spy. The spy:
- Records calls in `spy.calls` (an array of argument arrays), with `this` preserved when calling through.
- Calls the original method by default and returns its result.
- `spy.mockReturnValue(v)`: returns `v` instead of calling the original. It returns the spy, for chaining.
- `spy.mockImplementation(fn)`: calls `fn` instead of the original.
- `spy.restore()`: puts the original method back.
- Throws `TypeError('<name> is not a function')` if `obj[name]` isn't a function.
