---
slug: "react-ui-tasks-sort-toggle"
title: "React: Sort tasks by estimate (hours)"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Sort tasks by estimate (hours)

Build `TaskSorter`: a `<ul>` of titles from `items`, sorted by `estimate` **ascending** at first, and a button that toggles the direction. The button reads `Sort descending` while ascending, and `Sort ascending` while descending. Never mutate the `items` prop.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
