---
slug: "ut-p-reducer-tests"
title: "Practice: Testing a Todo Reducer"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
---
# Practice: Testing a Todo Reducer

`todosReducer(state, action)` manages `{ todos: [{ id, title, done }], nextId }`:

- `{ type: 'add', title }`: appends `{ id: nextId, title: title.trim(), done: false }` and increments `nextId`. A blank title changes nothing (it returns the **same** state).
- `{ type: 'toggle', id }`: flips `done` on that todo only.
- `{ type: 'remove', id }`
- `{ type: 'clearDone' }`: removes the done todos.
- It never mutates the state, and unknown actions return the same state.

Tip: `Object.freeze` your input state. Then a mutating bug throws in strict mode, or at least leaves the input unchanged where you can check it.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
