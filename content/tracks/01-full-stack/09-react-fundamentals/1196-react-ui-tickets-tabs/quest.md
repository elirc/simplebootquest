---
slug: "react-ui-tickets-tabs"
title: "React: Tabs of tickets by priority"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Tabs of tickets by priority

Build `TicketTabs`: one `<button>` per distinct `priority` in `items` (in order of first appearance), with `aria-selected` on the active one. Below, a `<ul>` shows the subjects in the active priority. The first priority starts active.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
