---
slug: react-thinking-in-react
title: Thinking in React
type: quiz
xp: 15
questions:
  - prompt: "What is a React component?"
    options: ["An HTML template file", "A function that takes props and returns UI (JSX)", "A CSS class"]
    answer: 1
  - prompt: "A parent and its child both need the same piece of state. Where should it live?"
    options: ["Copied into both", "In the closest common parent, passed down as props ('lifting state up')", "In a global variable"]
    answer: 1
  - prompt: "Can a component modify the props it receives?"
    options: ["Yes", "No — props are read-only; ask the parent to change them via a callback prop"]
    answer: 1
  - prompt: "Why must you never mutate state directly (e.g. `todos.push(x)`)?"
    options: ["It's slower", "React compares references to detect changes; mutation keeps the same reference so the UI may not update", "JavaScript doesn't allow it"]
    answer: 1
  - prompt: "What's 'derived state'?"
    options: ["State copied from props", "Values you can calculate from existing state/props during render — so don't store them separately", "State from the server"]
    answer: 1
    explanation: "Don't keep `remainingCount` in state alongside `todos`. Compute `todos.filter(t => !t.done).length` during render."
---
# Thinking in React

### Components are functions

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

<Greeting name="Ada" />
```

JSX is just syntax for function calls. `<h1 className="title">Hi</h1>` compiles to something like `createElement('h1', { className: 'title' }, 'Hi')`. That's why it uses `className` instead of `class`, and why you can embed any JavaScript expression inside `{}`.

### Data flows down, events flow up

- Parents pass data to children through **props**.
- Children tell parents about events through **callback props** (`onDelete={() => ...}`).
- State lives in the **lowest common parent** of the components that need it.

### The five steps (from the React docs)

1. Break the UI into a component hierarchy.
2. Build a static version with props only.
3. Find the *minimal* state the UI needs.
4. Decide where each piece of state lives.
5. Add inverse data flow (callbacks).

### Minimal state

If you can compute it, **don't store it.** Store `todos`, not `todos` *and* `doneCount`. Duplicated state drifts out of sync and causes bugs.
