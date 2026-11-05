---
slug: "react-ui-products-stale-closure"
title: "React: Fix a stale state update"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Fix a stale state update

`DoubleClick` should add **2** to the count every time its button is clicked. The starter calls `setCount(count + 1)` twice in the same handler, but both calls read the same stale `count`, so it only adds 1. Fix it using the **functional update** form. Show the count in a `<span>`, starting at 2.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
