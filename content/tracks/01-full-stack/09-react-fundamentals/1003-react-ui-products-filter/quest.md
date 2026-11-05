---
slug: "react-ui-products-filter"
title: "React: Filter a list of products"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Filter a list of products

Build `ProductFilter` with a text `<input>` and a `<ul>` of the names from `items` that contain the input text (case-insensitive). When nothing matches, render `<p>No matches</p>` instead of the list.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
