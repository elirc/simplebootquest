---
slug: "react-composition"
title: "Composition & Slots"
type: "code"
language: "jsx"
xp: 20
hints: ["Slots are just props that hold elements: render them with `{header}`.", "`ConfirmDelete` returns a `<Modal>` with `actions={<button ...>}`."]
resources: [{"title": "React docs: Passing JSX as children", "url": "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children"}]
---
# Composition & Slots

React favours **composition over configuration**. Instead of one component with 20 boolean props, build small pieces that accept other elements:

```jsx
<Layout
  header={<Nav />}            // a "slot" prop
  sidebar={<Filters />}
>
  <TodoList />                // children
</Layout>
```

A good layout component knows *where* things go, not *what* they are. That's the same separation of concerns you used on the backend.

## Your task

1. `Layout({ header, sidebar, children })` renders:
   ```html
   <div className="layout">
     <header>{header}</header>
     <aside>{sidebar}</aside>       ← only when a sidebar is given
     <main>{children}</main>
   </div>
   ```
2. `Modal({ title, open, onClose, children, actions })` renders nothing when `open` is false. Otherwise it renders `<div role="dialog" aria-label={title}>` containing an `<h2>` with the title, the children, and a `<footer>` holding `actions` (if any) followed by `<button onClick={onClose}>Close</button>`.
3. `ConfirmDelete({ itemName, onConfirm, onCancel })` composes `Modal` (always open, titled `"Delete <itemName>?"`), with the body `<p>This cannot be undone.</p>`, a `<button className="danger" onClick={onConfirm}>Delete</button>` action, and `onClose={onCancel}`.
