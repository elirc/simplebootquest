---
slug: "ut-p-retry-tests"
title: "Practice: Testing Retry Logic"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice"
hints: ["A mutant may call `fn` one extra time. Only `toHaveBeenCalledTimes` will notice."]
---
# Practice: Testing Retry Logic

`retry(fn, retries)` calls the async function `fn` and, if it rejects, tries again up to `retries` more times. It resolves with the first success, or rejects with the **last** error.

Use `vi.fn()` to build a function that fails a set number of times, and check `toHaveBeenCalledTimes`.

```js
let calls = 0;
const flaky = vi.fn(async () => {
  calls++;
  if (calls < 3) throw new Error(`fail ${calls}`);
  return 'ok';
});
```

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
