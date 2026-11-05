---
slug: "js-p-rename-keys"
title: "Practice: Renaming & Inverting Keys"
type: "code"
language: "js"
xp: 15
hints: ["`Object.entries` → `map` → `Object.fromEntries`."]
---
# Practice: Renaming & Inverting Keys

Mapping data between systems (an API's `first_name` to your `firstName`) is daily work.

## Your task
1. `renameKeys(obj, mapping)` returns a new object with keys renamed according to `mapping` (`{ first_name: 'firstName' }`). Unmapped keys are kept.
2. `invert(obj)` swaps keys and values (`{ a: 'x', b: 'y' }` → `{ x: 'a', y: 'b' }`). If values repeat, the **last** key wins.
