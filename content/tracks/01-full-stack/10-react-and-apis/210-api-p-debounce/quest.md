---
slug: "api-p-debounce"
title: "Practice: Debouncing Search Input"
type: "code"
language: "js"
xp: 15
hints: ["Store the timer id and the latest args. Every call clears the old timer and starts a new one."]
---
# Practice: Debouncing Search Input

Sending a request on every keystroke wastes server capacity and causes flicker. **Debouncing** waits until the user stops typing for `ms` milliseconds, then calls the function once with the latest arguments.

To test timing without real waiting, the timer functions are **injected**.

## Your task
Write `debounce(fn, ms, timers = { setTimeout, clearTimeout })` returning a debounced function with two extra methods:
- Calling it restarts the timer. When the timer fires, `fn` is called with the **latest** arguments.
- `.flush()`: if a call is pending, run it now and cancel the timer.
- `.cancel()`: drop the pending call.
