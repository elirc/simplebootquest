---
slug: "react-ui-courses-cart"
title: "React: A course cart total"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: A course cart total

Build `Cart`. For each item in `items` render an `<li>` with the title, a `-` button, the quantity in a `<span>` (starting at 0), and a `+` button. Quantities never go below 0. Below the list, `<p>` shows `Total: <sum of quantity × enrolled>`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
