---
slug: "async-p-json-reviver"
title: "Practice: Reviving Dates from JSON"
type: "code"
language: "js"
xp: 15
hints: ["A replacer function can return a new object with sorted keys."]
---
# Practice: Reviving Dates from JSON

JSON has no Date type, so dates arrive as strings. `JSON.parse` accepts a **reviver** function that can transform values as they're parsed:

```js
JSON.parse(text, (key, value) => ...);
```

## Your task
1. `parseWithDates(text)` parses JSON and converts every string matching a full ISO timestamp (`YYYY-MM-DDTHH:mm:ss(.sss)Z`) into a `Date`, at any depth.
2. `stringifySorted(value)` returns JSON with object keys sorted alphabetically at every level. That's useful for stable snapshots and cache keys.
