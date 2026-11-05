---
slug: "react-ui-workouts-todo"
title: "React: Add and remove workouts"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Add and remove workouts

Build `WorkoutList`: a `<form>` with an `<input>` and an `Add` button. Submitting adds the trimmed text as a new `<li>` (ignore blank input) and clears the input. Each `<li>` contains the text and a `Remove` button that removes it.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
