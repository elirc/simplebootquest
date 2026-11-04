---
slug: "js-async-queue"
title: "Serializing Work with a Queue"
type: "code"
language: "js"
xp: 25
hints: ["Chain each task onto the previous tail: `tail.then(() => task())`.", "The new tail must swallow errors (`.catch(() => {})`), otherwise one failure blocks everything after it."]
---
# Serializing Work with a Queue

Sometimes async tasks must run **one at a time**, in order: writes to the same file, sequential database migrations, or "save" requests that must not overtake each other.

A simple technique: keep a promise chain and append each task to its tail.

```js
let tail = Promise.resolve();
function enqueue(task) {
  const result = tail.then(task);
  tail = result.catch(() => {});   // a failure must not block later tasks
  return result;
}
```

This pattern is called a **mutex** or **serial queue**.

## Your task

`createQueue()` returns:

- `add(task)` → runs `task()` after every previously added task has finished, and returns a promise of its result. A failing task rejects its own promise, but **doesn't stop** later tasks.
- `size()` → the number of tasks added but not yet finished.
