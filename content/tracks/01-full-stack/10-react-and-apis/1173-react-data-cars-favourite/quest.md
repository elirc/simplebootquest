---
slug: "react-data-cars-favourite"
title: "React: Optimistic favourite toggle"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Optimistic favourite toggle

Build `Favourite({ id, initial, save })`: a button with `aria-pressed` reflecting whether it's favourited, reading `★ Saved` or `☆ Save`. Clicking flips the state **immediately**, then calls `save(id, newValue)`. If that rejects, flip back and show `<p role="alert">Could not save</p>`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
