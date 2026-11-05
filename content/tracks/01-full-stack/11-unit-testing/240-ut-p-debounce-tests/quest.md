---
slug: "ut-p-debounce-tests"
title: "Practice: Testing a Debounce with Fake Timers"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
---
# Practice: Testing a Debounce with Fake Timers

`debounce(fn, ms, timers)` delays calls until there's a pause of `ms` milliseconds, then calls `fn` once with the **latest** arguments. `timers` is `{ setTimeout, clearTimeout }`, injected so tests can control time.

Write a small fake clock for your tests:

```js
function fakeTimers() {
  let now = 0;
  let id = 0;
  const pending = new Map();
  return {
    setTimeout: (cb, ms) => { pending.set(++id, { cb, at: now + ms }); return id; },
    clearTimeout: (i) => pending.delete(i),
    advance(ms) {
      now += ms;
      for (const [i, t] of [...pending]) if (t.at <= now) { pending.delete(i); t.cb(); }
    },
  };
}
```

(In Vitest you'd use `vi.useFakeTimers()` and `vi.advanceTimersByTime(ms)`.)

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
