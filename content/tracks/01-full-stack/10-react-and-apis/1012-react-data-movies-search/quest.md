---
slug: "react-data-movies-search"
title: "React: Search movies on submit"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Search movies on submit

Build `MovieSearch({ search })`: a `<form>` with an `<input>`. On submit, call `search(query)` (trimmed; do nothing for a blank query) and show the results as a `<ul>` of titles, plus `<p>{n} results</p>`. Disable the submit button while a search is in flight.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
