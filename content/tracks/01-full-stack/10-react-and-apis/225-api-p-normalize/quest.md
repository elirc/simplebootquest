---
slug: "api-p-normalize"
title: "Practice: Normalised Client State"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Copy `byId` with spread and `ids` with `[...ids]` first, then change the copies.", "`const { [id]: _, ...rest } = obj` removes a computed key without mutating."]
resources: [{"title": "Redux docs: Normalizing state shape", "url": "https://redux.js.org/usage/structuring-reducers/normalizing-state-shape"}]
---
# Practice: Normalised Client State

When the same todo appears in several lists (today, by project, search results), storing copies means updates have to be applied in many places. **Normalising** stores each entity once, by id, and lists hold only ids:

```js
{ byId: { 1: {...}, 2: {...} }, ids: [2, 1] }
```

This is how Redux Toolkit's `createEntityAdapter` works.

## Your task
Write pure functions over `{ byId, ids }` (never mutate the input):
- `normalize(list)`: builds the state from an array (the order of `ids` follows the list).
- `upsertMany(state, list)`: adds new entities (appending their ids in list order) and **merges** fields into existing ones (their position doesn't change).
- `removeOne(state, id)`.
- `selectAll(state)`: the entities in `ids` order.
