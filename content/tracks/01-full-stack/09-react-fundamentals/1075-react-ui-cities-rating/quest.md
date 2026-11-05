---
slug: "react-ui-cities-rating"
title: "React: A 3-star city rating"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: A 3-star city rating

Build `Rating` with 3 buttons labelled `★` (rated) or `☆` (not rated), each with `aria-label="Rate N"`, and a `<p>` showing `N/3` (`0/3` at first). Clicking star N sets the rating to N. Clicking the current rating again resets it to 0.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
