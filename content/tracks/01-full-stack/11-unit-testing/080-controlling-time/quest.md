---
slug: "ut-controlling-time"
title: "Controlling Time"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Test the exact expiry instant, and one second before it.", "Pick a \"now\" in the middle of a day to catch rounding bugs."]
resources: [{"title": "Vitest: Fake timers", "url": "https://vitest.dev/guide/mocking/timers"}]
---
# Controlling Time

Code that calls `new Date()` or `Date.now()` directly is hard to test: the answer changes every run, and you can't test "what happens on the last day of the trial" without waiting for it.

The fix you've used all course is to **inject the current time**:

```js
function isTrialActive(user, now) { ... }   // now is a Date passed in

test('active on the last day', () => {
  expect(isTrialActive(user, new Date('2026-03-14T23:59:59Z'))).toBe(true);
});
```

(Vitest also has `vi.useFakeTimers()` and `vi.setSystemTime()` for code you can't change. Injection is simpler when you can.)

`trialStatus(user, now)`:

- A trial lasts **14 days** from `user.signedUpAt` (a `Date`). It's active while `now` is **before** `signedUpAt + 14 days`.
- It returns `{ active, daysLeft }`, where `daysLeft` is the number of whole days left, **rounded up** (0 when expired).
- Paying users (`user.plan === 'pro'`) are never on a trial: `{ active: false, daysLeft: 0 }`.
