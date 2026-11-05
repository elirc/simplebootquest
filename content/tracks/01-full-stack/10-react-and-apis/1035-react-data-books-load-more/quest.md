---
slug: "react-data-books-load-more"
title: "React: Load more books"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: Data Fetching"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Put data loading in `useEffect` with the right dependencies, and ignore late responses with a cleanup flag."]
---
# React: Load more books

Build `BookFeed({ loadPage })`. `loadPage(page)` (1-based) resolves to `{ items, hasMore }`. Load page 1 on mount and show every loaded title in a `<ul>`. While `hasMore` is true, show a `Load more` button that loads the next page and **appends** its items.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
