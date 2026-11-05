---
slug: "react-data-products-abort"
title: "React: Cancel stale searches"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Cancel stale searches

Build `LiveProductSearch({ search })`: an `<input>`. Every change calls `search(query, signal)` with an `AbortSignal`, and aborts the previous request's controller (in the effect cleanup). Show the names of the latest results in a `<ul>`. A slow, outdated response must never overwrite newer results.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
