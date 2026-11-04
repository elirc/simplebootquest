---
slug: react-api-async-states
title: Rendering Async States
type: code
language: jsx
xp: 25
hints: ["Work out `data` first (success data or previous), then branch."]
---
# Rendering Async States

Every data-driven screen has (at least) four states. Design all of them, not just the happy path:

| State | Show |
|-------|------|
| Loading (first load) | A spinner or skeleton |
| Error | What went wrong, plus a **retry** button |
| Empty | A helpful message and a call to action ("No recipes yet — add one!") |
| Success | The data |

```jsx
function RecipesPage({ state, onRetry }) {
  if (state.status === 'loading') return <p aria-busy="true">Loading…</p>;
  if (state.status === 'error') return <ErrorBox message={state.error} onRetry={onRetry} />;
  if (state.data.length === 0) return <EmptyState />;
  return <RecipeList recipes={state.data} />;
}
```

## Your task

Implement `TodoScreen({ state, onRetry, onAdd })`. `state` uses the `FetchState` shape from the previous quest (`idle`, `loading`, `success` or `error`, with an optional `previous`).

| State | Render |
|-------|--------|
| `idle`, or `loading` without `previous` | `<p className="loading" aria-busy="true">Loading…</p>` |
| `error` without `previous` | `<div className="error" role="alert">` containing `<p>{error}</p>` and `<button onClick={onRetry}>Retry</button>` |
| data (from `success`, or the `previous` of loading/error) that is **empty** | `<div className="empty">` containing `<p>No todos yet</p>` and `<button onClick={onAdd}>Add your first todo</button>` |
| data that is **not empty** | `<ul>` with one `<li key={todo.id}>{todo.title}</li>` per todo |

When an error happens and there *is* previous data, render the list and **also** show the error banner above it. Wrap both in `<>...</>` (a Fragment), with the banner first.
