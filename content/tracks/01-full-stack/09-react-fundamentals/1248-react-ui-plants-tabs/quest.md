---
slug: "react-ui-plants-tabs"
title: "React: Tabs of plants by light needs"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Tabs of plants by light needs

Build `PlantTabs`: one `<button>` per distinct `light` in `items` (in order of first appearance), with `aria-selected` on the active one. Below, a `<ul>` shows the names in the active light needs. The first light needs starts active.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
