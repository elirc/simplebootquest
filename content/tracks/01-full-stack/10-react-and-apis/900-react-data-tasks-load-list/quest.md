---
slug: "react-data-tasks-load-list"
title: "React: Load tasks from an API"
type: "code"
language: "jsx"
xp: 20
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Load tasks from an API

Build `TaskList({ load })`. `load()` returns a promise of tasks. Show `<p>Loading…</p>` while waiting, then a `<ul>` of titles. If `load` rejects, show `<p role="alert">Something went wrong</p>` and a `Retry` button that calls `load` again.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
