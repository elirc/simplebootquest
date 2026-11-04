---
slug: "js-maps-and-sets"
title: "Map & Set"
type: "code"
language: "js"
xp: 15
hints: ["Turn `b` into a `Set` for fast `has` lookups.", "For `mostFrequent`, track the best item while you count, and only replace it when a count is strictly greater."]
resources: [{"title": "MDN: Map", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}, {"title": "MDN: Set", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"}]
---
# Map & Set

**`Set`**: a collection of *unique* values.

```js
const tags = new Set(['js', 'node']);
tags.add('js');       // ignored, already there
tags.has('node');     // true
tags.size;            // 2
[...tags];            // ['js', 'node']
```

**`Map`**: key/value pairs where keys can be *anything* (objects, numbers…), and insertion order is preserved.

```js
const visits = new Map();
visits.set('/home', 1);
visits.set('/home', visits.get('/home') + 1);
visits.get('/home');  // 2
for (const [path, count] of visits) { ... }
```

Prefer `Map` over plain objects for dynamic lookup tables (caches, counters, indexes). Prefer plain objects for fixed-shape records.

## Your task

1. `commonTags(a, b)` returns the tags that appear in both arrays (in `a`'s order, no duplicates).
2. `countBy(items, keyFn)` returns a `Map` from `keyFn(item)` to a count.
3. `mostFrequent(items)` returns the item that appears the most. On a tie, return the one that reached that count first.
