---
slug: react-api-fetch-state
title: Modelling Fetch State
type: code
language: ts
xp: 25
hints: ["A `currentData(state)` helper simplifies every case.", "Only include `previous` when it is defined."]
---
# Modelling Fetch State

Instead of juggling `isLoading`, `error` and `data` separately, model **every possible state explicitly**:

```ts
type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading'; previous?: T }   // keep old data visible while refreshing
  | { status: 'success'; data: T; fetchedAt: number }
  | { status: 'error'; error: string; previous?: T };
```

Now "loading with an error" is **unrepresentable**. The type system rules it out.

Keeping `previous` data around while refetching avoids a jarring flash of a spinner every time the user refreshes or changes page. This is what TanStack Query calls "stale-while-revalidate".

## Your task

1. `fetchReducer(state, action)` handles:
   - `{ type: 'start' }` → `loading`, with `previous` set to the current data if the state is `success`, or carried over if the state is `error` and has a `previous`
   - `{ type: 'resolve', data, at }` → `success` with `data` and `fetchedAt: at`
   - `{ type: 'reject', error }` → `error` with the error message, keeping any `previous`
   - `{ type: 'reset' }` → `idle`
2. `viewModel(state)` returns what the UI should display: `{ showSpinner, data, errorMessage }`.
   - `showSpinner` is true only when loading **without** previous data.
   - `data` is the current data or the previous data (`undefined` if neither exists).
   - `errorMessage` is the error string, or `null`.

Only include `previous` when it's defined.
