---
slug: "react-ui-employees-converter"
title: "React: kg to lb converter"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: kg to lb converter

Build `Converter`: an `<input>` for a value in kg and an `<output>` showing it in lb, rounded to **1 decimal place** (`Math.round(x * 10) / 10`). Show nothing in the output while the input is empty or not a number.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
