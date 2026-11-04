---
slug: react-events-and-callbacks
title: Events & Callback Props
type: code
language: jsx
xp: 25
hints: ["`onClick={() => onDelete(todo.id)}`: pass a function, don't call one.", "`disabled={page <= 1}`."]
resources: [{"title": "React docs: Responding to events", "url": "https://react.dev/learn/responding-to-events"}]
---
# Events & Callback Props

Attach handlers with `on*` props:

```jsx
<button onClick={() => onDelete(todo.id)}>Delete</button>
<input onChange={(e) => setTitle(e.target.value)} />
<form onSubmit={(e) => { e.preventDefault(); save(); }}>
```

⚠️ Pass a **function**, don't call one: `onClick={handleClick}` ✅, `onClick={handleClick()}` ❌ (that runs it during render).

### Inverse data flow

Child components don't change data themselves. They **report** events to their parent, which owns the state:

```jsx
function TodoRow({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
```

This keeps components reusable: `TodoRow` doesn't care whether the parent saves to `useState`, a server, or both.

## Your task

1. `TodoRow({ todo, onToggle, onDelete })` renders an `<li>` containing:
   - `<input type="checkbox" checked={todo.done} onChange={...} />`, where `onChange` calls `onToggle(todo.id)`
   - a `<span>` with the title
   - `<button className="delete" onClick={...}>Delete</button>`, where `onClick` calls `onDelete(todo.id)`
2. `Pagination({ page, totalPages, onPageChange })` renders a `<nav>` with:
   - `<button className="prev">Previous</button>`, which calls `onPageChange(page - 1)` and has `disabled={true}` on the first page
   - `<span>Page {page} of {totalPages}</span>`
   - `<button className="next">Next</button>`, which calls `onPageChange(page + 1)` and is disabled on the last page
