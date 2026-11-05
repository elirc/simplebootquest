---
slug: "react-data-recipes-polling-refresh"
title: "React: Refresh on demand"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Refresh on demand

Build `RecipeCount({ fetchCount })`: on mount, call `fetchCount()` and show `<p>{n} recipes</p>`. A `Refresh` button fetches again, and shows `Refreshing…` (and is disabled) while in flight. Show the previous number while refreshing (don't blank it out).

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
