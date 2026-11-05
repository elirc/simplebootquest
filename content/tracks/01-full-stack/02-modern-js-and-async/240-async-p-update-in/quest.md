---
slug: "async-p-update-in"
title: "Practice: Immutable updateIn"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Recursion: copy this level, and set `copy[key]` to the update of the rest of the path."]
resources: [{"title": "Immer", "url": "https://immerjs.github.io/immer/"}]
---
# Practice: Immutable updateIn

State libraries like Immer exist because deep immutable updates are fiddly. Here's the core helper.

## Your task
`updateIn(obj, path, fn)` returns a new object where the value at `path` (an array of keys and indexes, like `['users', 0, 'name']`) is replaced by `fn(oldValue)`. Every object or array on the path is copied (arrays stay arrays), and everything else is shared.
