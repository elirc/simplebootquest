---
slug: "async-p-priority-queue"
title: "Practice: A Priority Task Queue"
type: "code"
language: "js"
xp: 15
hints: ["Keep the queue sorted by priority (descending), then by insertion order."]
---
## Your task
`createPriorityQueue()` returns `{ add(task, priority = 0), onIdle() }`:

- Tasks run **one at a time**.
- When choosing the next task, the highest `priority` goes first. Equal priorities run in insertion order.
- `add` returns a promise of the task's result (a rejection only affects that task).
- `onIdle()` resolves when the queue is empty and nothing is running.

A task added while another is running waits for it to finish, but can still jump ahead of lower-priority **queued** tasks.
