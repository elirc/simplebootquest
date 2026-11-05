---
slug: "react-data-products-create"
title: "React: Save a new product"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Save a new product

Build `NewProduct({ create })`: a `<form>` with an `<input>` for the name and a `Save` button. On submit, call `create({ name })`. While saving, the button reads `Saving…` and is disabled. On success, clear the input and show `<p role="status">Saved!</p>`. On failure, show `<p role="alert">{error.message}</p>` and keep the input.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
