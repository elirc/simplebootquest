---
slug: "js-data-plants-update"
title: "Data: Update plants immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update plants immutably

Return a **new** array where every plant with `light` equal to `value` has `waterEveryDays` increased by `amount`. Other plants are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `PLANTS` in the tests):

```js
const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 1, heightCm: 77, light: "medium", petSafe: true},
  {id: 2, name: "Bonsai", waterEveryDays: 17, heightCm: 49, light: "low", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 3, heightCm: 27, light: "bright", petSafe: true},
  {id: 4, name: "Orchid", waterEveryDays: 15, heightCm: 141, light: "bright", petSafe: false},
  {id: 5, name: "Monstera", waterEveryDays: 16, heightCm: 28, light: "low", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 1, heightCm: 151, light: "bright", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 4, heightCm: 40, light: "medium", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 14, heightCm: 134, light: "low", petSafe: true}
]
```
