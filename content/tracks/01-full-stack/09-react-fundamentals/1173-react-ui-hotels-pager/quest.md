---
slug: "react-ui-hotels-pager"
title: "React: Page through hotels"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: Page through hotels

Build `HotelPager`: show 2 names per page in a `<ul>`, a `<p>` with `Page X of Y`, and `Previous` / `Next` buttons, disabled on the first and last page.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
