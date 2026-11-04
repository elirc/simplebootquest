---
slug: "js-type-conversion"
title: "Type Conversion"
type: "code"
language: "js"
xp: 15
hints: ["Check for the empty string **before** calling `Number`, because `Number(\"\")` is `0`.", "Use `Number.isNaN(n)` to detect a failed conversion.", "Put the accepted words in arrays and use `.includes`."]
resources: [{"title": "javascript.info: Type conversions", "url": "https://javascript.info/type-conversions"}]
---
# Type Conversion

Form fields and URLs always give you **strings**. Converting them correctly is a daily task.

```js
Number('42');      // 42
Number('42px');    // NaN   — the whole string must be numeric
parseInt('42px');  // 42    — stops at the first non-digit
parseFloat('3.5kg'); // 3.5
Number('');        // 0     ⚠️ surprising!
String(42);        // '42'
Boolean('');       // false
Boolean('false');  // true  ⚠️ any non-empty string is truthy
Number.isNaN(NaN); // true  (NaN is the only value not equal to itself)
```

JavaScript also converts types *implicitly*, which causes classic bugs:

```js
'5' + 1;   // '51'  (+ with a string concatenates)
'5' - 1;   // 4     (- always converts to numbers)
```

**Be explicit.** Convert input once, on purpose, and validate the result.

## Your task

1. `toNumber(input)` converts a string to a number. Return `null` if the trimmed input is empty or isn't a valid number (`"12"` → `12`, `" 3.5 "` → `3.5`, `"abc"` → `null`, `""` → `null`).
2. `parseBool(input)` returns `true` for `"true"`, `"1"`, `"yes"`, `"on"` and `false` for `"false"`, `"0"`, `"no"`, `"off"` (case-insensitive, trimmed). Anything else returns `null`.
3. `addStrings(a, b)` adds two numeric strings **as numbers** and returns a number.
