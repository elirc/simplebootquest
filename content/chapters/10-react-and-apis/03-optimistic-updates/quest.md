---
slug: react-api-optimistic-updates
title: Optimistic Updates
type: code
language: ts
xp: 30
---
# Optimistic Updates

Waiting 300ms for the server before a checkbox ticks feels sluggish. **Optimistic updates** change the UI immediately, then reconcile with the server:

1. Apply the change locally, right away.
2. Send the request.
3. On success, replace the optimistic version with the server's response (it might add `updatedAt`, a real `id`, ...).
4. On failure, **roll back** to the previous state and show an error.

```ts
const snapshot = todos;
setTodos(applyOptimistic(todos, op));
try {
  const saved = await api.update(op.id, op.changes);
  setTodos((current) => confirm(current, op, saved));
} catch {
  setTodos(snapshot);          // rollback
  toast('Could not save');
}
```

New items don't have a server id yet. Give them a **temporary id** (like `"temp-1"`) and swap in the real one on success.

## Your task

`op` is one of:

- `{ kind: 'create', tempId, data }`
- `{ kind: 'update', id, changes }`
- `{ kind: 'delete', id }`

1. `applyOptimistic(todos, op)` returns the new list:
   - create → append `{ id: tempId, ...data, pending: true }`
   - update → merge `changes` and set `pending: true`
   - delete → remove the todo
2. `confirm(todos, op, saved)` reconciles with the server response:
   - create → replace the temp item with `saved` (no `pending` key)
   - update → replace the item with `saved`
   - delete → return `todos` unchanged (already removed)
3. `rollback(snapshot)` returns the snapshot. (Yes, really: keeping snapshots makes rollback trivial. That's the point.)

Never mutate the inputs.
