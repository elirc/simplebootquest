---
slug: "react-hooks-quiz"
title: "Checkpoint: Hooks & Effects"
type: "quiz"
xp: 15
questions: [{"prompt": "Why can't you call useState inside an if statement?", "options": ["It is slower", "React tracks hooks by call order, which must be the same every render", "Conditions are not allowed in components"], "answer": 1}, {"prompt": "`setCount(count + 1)` is called twice in one click handler. What happens?", "options": ["count increases by 2", "count increases by 1, because both calls read the same stale value", "It throws"], "answer": 1, "explanation": "Use the updater form: setCount(c => c + 1)."}, {"prompt": "What does the function returned from useEffect do?", "options": ["Nothing", "Cleans up (unsubscribes, clears timers) before the effect re-runs or the component unmounts", "Returns data to the component"], "answer": 1}, {"prompt": "You compute `fullName` from `first` and `last` in state. Where should it live?", "options": ["In its own useState, synced with useEffect", "Computed during render: const fullName = first + \" \" + last", "In a ref"], "answer": 1}, {"prompt": "Which hook do you use to read a value from a Context?", "options": ["useState", "useContext", "useReducer"], "answer": 1}, {"prompt": "What is `useRef` good for?", "options": ["Triggering re-renders", "Holding a mutable value (or DOM node) that persists between renders without causing re-renders", "Fetching data"], "answer": 1}]
---
# Checkpoint: Hooks & Effects

Hooks rules: only call them **at the top level** of a component (never inside conditions or loops), and only from components or other hooks. React relies on calling them in the same order on every render.

```jsx
const [count, setCount] = useState(0);
useEffect(() => {
  const id = setInterval(() => setCount((c) => c + 1), 1000);
  return () => clearInterval(id);          // cleanup on unmount or before re-running
}, []);                                     // dependency array: [] = run once after mount
```

Answer every question correctly to earn the XP.
