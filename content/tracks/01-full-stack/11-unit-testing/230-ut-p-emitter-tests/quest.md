---
slug: "ut-p-emitter-tests"
title: "Practice: Testing an Event Emitter"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice"
hints: ["One mutant only shows up when a `once` listener removes itself DURING emit, so test a once listener followed by a normal one."]
---
# Practice: Testing an Event Emitter

`createEmitter()` returns `{ on(event, fn), off(event, fn), once(event, fn), emit(event, ...args) }`:

- `on` registers a listener and returns an **unsubscribe** function.
- `emit` calls the listeners for that event **in the order they were added**, with the arguments, and returns how many listeners ran.
- `once` listeners run at most one time.
- `off` removes only that one listener.

Use `vi.fn()` listeners and `toHaveBeenCalledWith` / `toHaveBeenCalledTimes`.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
