---
slug: "ut-p-ttl-cache"
title: "Practice: Testing a TTL Cache with Injected Time"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice"
---
# Practice: Testing a TTL Cache with Injected Time

`createCache({ ttlMs, now })` returns `{ get(key), set(key, value), size() }`. Entries expire `ttlMs` after they were set: `get` at **exactly** `ttlMs` later returns `undefined`. Setting a key again restarts its timer. Expired entries are deleted when you read them.

The clock is injected, so your tests control time without waiting:

```js
let t = 0;
const cache = createCache({ ttlMs: 100, now: () => t });
cache.set('a', 1);
t = 99;   // still fresh
```

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
