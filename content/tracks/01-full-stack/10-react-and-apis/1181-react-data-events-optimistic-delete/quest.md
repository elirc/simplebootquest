---
slug: "react-data-events-optimistic-delete"
title: "React: Optimistic delete with rollback"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Optimistic delete with rollback

Build `EventManager({ initial, remove })`: a `<ul>` of names, each `<li>` with a `Delete` button. Clicking Delete removes the item **immediately** (optimistic), then calls `remove(id)`. If that rejects, put the item back in its original position and show `<p role="alert">Could not delete</p>`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
