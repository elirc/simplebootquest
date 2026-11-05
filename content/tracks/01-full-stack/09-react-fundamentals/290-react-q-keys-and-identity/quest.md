---
slug: "react-q-keys-and-identity"
title: "Quiz: Keys, Identity and Re-renders"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "React docs: Rendering lists", "url": "https://react.dev/learn/rendering-lists"}, {"title": "React docs: Preserving and resetting state", "url": "https://react.dev/learn/preserving-and-resetting-state"}]
questions: [{"prompt": "Why is using the array index as a key a problem for a list where items can be deleted or reordered?", "options": ["It is slower to compute", "Keys then follow positions, not items, so state and DOM get matched to the wrong items", "React forbids numbers as keys"], "answer": 1}, {"prompt": "What happens when a component's key changes?", "options": ["Nothing", "React unmounts the old instance and mounts a new one, resetting its state", "Only its props update"], "answer": 1}, {"prompt": "A memoised child still re-renders every time. Most likely cause?", "options": ["React.memo is broken", "The parent passes a new object or function prop on every render", "The child has no state"], "answer": 1}, {"prompt": "When does a component re-render?", "options": ["Only when its props change", "When its state changes, its parent re-renders, or a context it reads changes", "Every 16 ms"], "answer": 1}, {"prompt": "Where should keys go when mapping to `<li>` inside a fragment-free list?", "options": ["On the `<ul>`", "On the outermost element returned from map (here, the `<li>`)", "On a nested `<span>`"], "answer": 1}]
---
# Quiz: Keys, Identity and Re-renders

React decides what to update by comparing the new element tree with the old one:

- In a list, the **`key`** tells React which item is which. Use a stable id from your data, **not the array index**: with index keys, deleting the first item makes React think every item changed, and the state of inputs and components shifts to the wrong rows.
- A component **re-renders** when its state changes, when its parent re-renders, or when a context it uses changes. Re-rendering is usually cheap. Don't optimise without measuring.
- Changing a component's `key` **resets** its state. That's a handy trick: `<Profile key={userId} />`.
- `React.memo`, `useMemo` and `useCallback` skip work only when props are **referentially equal**. A new `{}` or `() => {}` on every render defeats them.
