---
slug: "react-ui-workouts-counter"
title: "React: A workout counter with limits"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: A workout counter with limits

Build `WorkoutCounter`: it shows a count in a `<span>` (starting at 0), a button labelled `-` and a button labelled `+`. `+` adds **3**, `-` subtracts 3. The count never goes below 0 or above 15: disable the `-` button at 0 and the `+` button at 15.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
