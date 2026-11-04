---
slug: react-boss-todo-app
title: "Project: A React Todo App"
type: project
xp: 120
boss: true
requirements:
  - "A Vite + React + TypeScript project (`npm create vite@latest`)"
  - "At least 5 components (e.g. App, TodoForm, TodoList, TodoItem, FilterBar), each in its own file"
  - "State managed with `useReducer`, using a reducer like the one from this chapter"
  - "Add, toggle, rename (double-click to edit), delete and 'clear completed'"
  - "Filters (all / active / done) and a 'N items left' counter computed from state, not stored separately"
  - "A controlled form with validation (no empty titles) and an accessible label for every input"
  - "Todos persisted to `localStorage` with `useEffect`, and loaded on startup"
  - "Deployed to a static host (Netlify, Vercel, GitHub Pages or Cloudflare Pages) with the live URL submitted"
---
# Project: A React Todo App

Now use **real React**. The logic you wrote in this chapter drops straight in.

## Setup

```bash
npm create vite@latest todo-app -- --template react-ts
cd todo-app && npm install && npm run dev
```

## Hooks you'll need

```tsx
const [state, dispatch] = useReducer(todosReducer, undefined, loadInitialState);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(state.todos));
}, [state.todos]); // runs whenever todos change

const [editing, setEditing] = useState(false);
```

`useEffect` is for **synchronising with things outside React**: localStorage, timers, subscriptions, network requests. If you're only computing a value from state, you don't need an effect. Compute it during render.

## Accessibility checklist

- Every input has a `<label>` (use `htmlFor` with an `id`, or wrap the input in the label).
- Buttons are real `<button>`s, not clickable `<div>`s.
- You can add and complete a todo using only the keyboard.

## Stretch goals

- Drag to reorder.
- Write component tests with Vitest + React Testing Library.

Submit your repository URL and the live URL.
