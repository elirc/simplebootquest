---
slug: "testing-fake-timers"
title: "Fake Timers"
type: "code"
language: "js"
xp: 30
hints: ["Store timers with their due time `at`, and a sequence number for ties.", "In `advance`, repeatedly pick the earliest due timer until none are due before the target time."]
resources: [{"title": "Vitest: Fake timers", "url": "https://vitest.dev/guide/mocking/timers"}]
---
# Fake Timers

Testing code with `setTimeout` by actually waiting is slow and flaky. Test frameworks provide **fake timers**:

```js
vi.useFakeTimers();
debouncedSave('x');
vi.advanceTimersByTime(300);   // instantly "wait" 300ms
expect(save).toHaveBeenCalled();
```

They replace `setTimeout` with a fake clock that keeps a queue of scheduled callbacks, and only run them when you advance time.

## Your task

`createFakeClock()` returns `{ now(), setTimeout(fn, ms), clearTimeout(id), setInterval(fn, ms), clearInterval(id), advance(ms), pending() }`:

- `now()` starts at 0.
- `advance(ms)` moves time forward, running every timer that becomes due **in chronological order** (ties run in scheduling order), with `now()` equal to the timer's due time while its callback runs. Timers scheduled by callbacks also run if they fall within the window.
- Intervals reschedule themselves until they're cleared.
- `pending()` returns the number of scheduled timers.
