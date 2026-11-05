---
slug: "crud-p-reorder"
title: "Practice: Drag-and-Drop Ordering"
type: "code"
language: "js"
xp: 15
hints: ["Remove with `splice(from, 1)`, then insert with `splice(target, 0, item)`.", "Compare each new position against a `Map` of the original positions to find what changed."]
---
# Practice: Drag-and-Drop Ordering

Kanban boards and playlists let users reorder items. The simplest storage is an integer `position` column. Moving an item means renumbering the affected items.

## Your task
Write `moveItem(items, id, toIndex)`:
- `items` are `{ id, position }` objects, possibly unsorted, with positions that may have gaps (`0, 3, 7`).
- Sort by position, move the item with `id` to `toIndex` (clamped to the valid range), and return a **new** array, sorted, with positions renumbered `0, 1, 2, …`.
- Return **only the items whose position changed**, too: `{ items, changed }`, where `changed` is the list of ids, in order, that need an `UPDATE`. (Fewer writes!)
- An unknown `id` → throw `Error('Item not found')`.
- Don't mutate the input.
