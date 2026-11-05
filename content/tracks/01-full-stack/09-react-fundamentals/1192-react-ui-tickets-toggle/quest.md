---
slug: "react-ui-tickets-toggle"
title: "React: Show and hide tickets"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Show and hide tickets

Build `TicketToggle` with a button. While hidden it reads `Show tickets`; while shown it reads `Hide tickets` and a `<ul>` lists every subject from the `items` prop. It starts hidden.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
