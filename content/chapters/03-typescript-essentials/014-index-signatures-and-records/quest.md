---
slug: "ts-records"
title: "Records & Index Signatures"
type: "code"
language: "ts"
xp: 15
hints: ["Start with an object that has every status key set to 0.", "Use `??` rather than `||`, because 0 is a valid value."]
---
# Records & Index Signatures

For objects used as **dictionaries** (arbitrary keys, same value type):

```ts
const scores: Record<string, number> = { ada: 10, grace: 12 };
// equivalent index signature:
interface Scores { [name: string]: number }

// a Record over a union REQUIRES every key:
type Status = 'todo' | 'doing' | 'done';
const labels: Record<Status, string> = { todo: 'To do', doing: 'In progress', done: 'Done' };
// forget one, and the compiler complains
```

With `noUncheckedIndexedAccess` turned on (as it is in this project's tsconfig), `scores['bob']` has type `number | undefined`, which forces you to handle missing keys.

## Your task

1. `countStatuses(tasks)` returns a `Record<Status, number>` with **every** status present (zero counts included).
2. `columns(tasks)` returns a `Record<Status, string[]>` of task titles grouped by status, like a Kanban board.
3. `lookup(dict: Record<string, number>, key: string, fallback: number)` returns the value or the fallback. Note that `0` is a real value!
