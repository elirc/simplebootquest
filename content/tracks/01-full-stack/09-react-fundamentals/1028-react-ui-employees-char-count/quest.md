---
slug: "react-ui-employees-char-count"
title: "React: A employee note with a character limit"
type: "code"
language: "jsx"
xp: 20
optional: true
section: "Practice: React Components"
hints: ["Start with the state you need (`useState`), then derive everything else from it while rendering.","Event handlers update state; React re-renders with the new state."]
---
# React: A employee note with a character limit

Build `NoteField` with a controlled `<textarea>`, a `<p>` showing `<length>/30`, and a `Save` button. Disable Save when the text is empty (after trimming) or longer than 30 characters. When it's too long, also show `<p role="alert">Too long</p>`. Clicking Save calls `onSave(text)`.

These components use **real React hooks** (`useState`, `useEffect`, `useReducer`, `useRef`, `useCallback`), available as globals or via `import { useState } from 'react'`. The tests render your component with `mount()` and interact with it like a user would (`ui.click`, `ui.type`, `ui.submit`), just like React Testing Library.
