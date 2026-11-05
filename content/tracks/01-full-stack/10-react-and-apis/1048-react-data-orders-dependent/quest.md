---
slug: "react-data-orders-dependent"
title: "React: Dependent requests"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Dependent requests

Build `OrderBrowser({ loadGroups, loadItems })`. On mount, `loadGroups()` resolves to a list of group names: render one `<button>` per group. Clicking a group calls `loadItems(group)` and shows the resulting codes in a `<ul>`. Before any group is chosen, show `<p>Pick a group</p>`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
