---
slug: "js-logical-operators"
title: "Logical Operators & Defaults"
type: "code"
language: "js"
xp: 15
hints: ["`displayName` wants `||` (empty string should fall back).", "`pageSize` wants `??` (0 should be kept).", "You can chain: `user?.address?.city?.toUpperCase()`."]
resources: [{"title": "MDN: Nullish coalescing", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing"}, {"title": "MDN: Optional chaining", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}]
---
# Logical Operators & Defaults

`&&`, `||` and `??` don't just return `true`/`false`. They return **one of their operands**:

```js
'Ada' || 'Anonymous';   // 'Ada'        (first truthy value)
'' || 'Anonymous';      // 'Anonymous'
0 || 10;                // 10   ⚠️ 0 is falsy!
0 ?? 10;                // 0    ?? only skips null/undefined
null ?? 'default';      // 'default'
user && user.name;      // user.name if user is truthy, otherwise user
```

### Optional chaining

`?.` stops and returns `undefined` if the left side is `null` or `undefined`, instead of throwing:

```js
const city = user?.address?.city;      // no "Cannot read properties of undefined"
const first = list?.[0];
callback?.();                            // only calls if it exists
```

**Rule of thumb:** use `??` for defaults, because `||` also throws away legitimate `0`, `''` and `false` values.

## Your task

1. `displayName(user)` returns `user.nickname`, falling back to `user.name`, falling back to `"Anonymous"`. A user may be `null`. An empty-string nickname should fall back too.
2. `pageSize(options)` returns `options.pageSize`, defaulting to `20` **only** when it's `null` or `undefined` (a page size of `0` is valid here). `options` may be `undefined`.
3. `cityOf(user)` returns `user.address.city` in upper case, or `"UNKNOWN"` if any part is missing.
