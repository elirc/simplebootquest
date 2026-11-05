---
slug: "react-data-flights-load-list"
title: "React: Load flights from an API"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Load flights from an API

Build `FlightList({ load })`. `load()` returns a promise of flights. Show `<p>Loading…</p>` while waiting, then a `<ul>` of numbers. If `load` rejects, show `<p role="alert">Something went wrong</p>` and a `Retry` button that calls `load` again.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
