---
slug: "async-p-debounce-promise"
title: "Practice: Debounced Async Functions"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Keep a list of resolve/reject pairs for the current burst."]
---
# Practice: Debounced Async Functions

A debounced **async** function, used for autosave or search-as-you-type, should return a promise to every caller. They should all get the result of the **one** call that actually runs.

## Your task
`debounceAsync(fn, ms)` returns a function that:

- delays calling `fn` until `ms` has passed without another call,
- calls `fn` with the **latest** arguments,
- returns a promise that every caller in that burst shares, resolving (or rejecting) with `fn`'s outcome.
