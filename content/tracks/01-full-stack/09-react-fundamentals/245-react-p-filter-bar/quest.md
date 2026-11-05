---
slug: "react-p-filter-bar"
title: "Practice: Filters and Derived State"
type: "code"
language: "jsx"
xp: 15
resources: [{"title": "React docs: Choosing the state structure", "url": "https://react.dev/learn/choosing-the-state-structure"}]
---
# Practice: Filters and Derived State

A rule that prevents many React bugs: **don't store what you can compute**. Keep `todos` and `filter` in state, and derive the visible list and the counts while rendering. Don't keep a separate `visibleTodos` state that can drift out of sync.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
1. `visibleTodos(todos, filter, search)`: `filter` is `'all'`, `'active'` or `'done'`. `search` matches titles case-insensitively (trimmed, and empty means no filter).
2. `counts(todos)` returns `{ all, active, done }`.
3. `<FilterBar todos filter onFilter />` renders `<div role="group" aria-label="Filter todos">` with three buttons labelled `"All (n)"`, `"Active (n)"` and `"Done (n)"`. The current one gets `aria-pressed={true}` and the others `false`. Clicking calls `onFilter('all' | 'active' | 'done')`.
