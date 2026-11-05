---
slug: "react-data-hotels-detail"
title: "React: Load a hotel when the id changes"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Load a hotel when the id changes

Build `HotelDetail({ id, load })`. Call `load(id)` on mount **and whenever `id` changes**, and show `<h2>{name}</h2>` plus `<p>star rating: {stars}</p>` once loaded (`<p>Loading…</p>` before). Responses for an old id that arrive late must be ignored.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
