---
slug: "js-null-vs-undefined"
title: "null, undefined & typeof"
type: "code"
language: "js"
xp: 10
hints: ["Check `null` first: `typeof null` is `\"object\"`.", "`Number.isNaN` only returns true for actual `NaN` (unlike the global `isNaN`)."]
---
# null, undefined & typeof

Two different "nothing" values:

- `undefined`: "no value was ever assigned". Missing properties, missing arguments, and functions without a `return` all give you `undefined`.
- `null`: "intentionally empty". You set it on purpose (`user.deletedAt = null`).

```js
typeof undefined;   // 'undefined'
typeof null;        // 'object'  ⚠️ a famous historical bug
typeof [];          // 'object'  — use Array.isArray([])
typeof (() => {});  // 'function'
value == null;      // true for BOTH null and undefined (the one good use of ==)
```

## Your task

Implement `describeType(value)`, which returns:

| Value | Result |
|-------|--------|
| `null` | `"null"` |
| arrays | `"array"` |
| `NaN` | `"nan"` |
| dates (`instanceof Date`) | `"date"` |
| everything else | the result of `typeof` |

And `isMissing(value)`, which is `true` only for `null` and `undefined`.
