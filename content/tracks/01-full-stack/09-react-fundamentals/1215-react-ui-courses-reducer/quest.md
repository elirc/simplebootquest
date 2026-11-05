---
slug: "react-ui-courses-reducer"
title: "React: Manage courses with useReducer"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Manage courses with useReducer

Write a reducer `coursesReducer(state, action)` for an array of `{ id, title, done }` with actions `add` (`{ type: 'add', title }`, id = state.length + 1, done false), `toggle` (`{ type: 'toggle', id }`) and `clearDone`. Never mutate the state. Then build `CourseBoard` using `useReducer`: it starts with the `initial` prop. Each item is an `<li>` with an `onClick` that toggles it, plus `aria-checked` set to its `done`. A `Clear done` button dispatches `clearDone`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
