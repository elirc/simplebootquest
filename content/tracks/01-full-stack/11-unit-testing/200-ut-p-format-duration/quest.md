---
slug: "ut-p-format-duration"
title: "Practice: Testing a Duration Formatter"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["A single happy-path test catches only some mutants. Test 60, 3600 and 3601 separately."]
---
# Practice: Testing a Duration Formatter

`formatDuration(seconds)` turns a number of seconds into a short label:

- `3723` → `"1h 2m 3s"`, and `60` → `"1m"` (zero parts are left out)
- `0` → `"0s"`
- Negative numbers and non-integers throw a `RangeError`.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.

Think about each **boundary**: exactly 60 seconds, exactly 3600, and values just below them.
