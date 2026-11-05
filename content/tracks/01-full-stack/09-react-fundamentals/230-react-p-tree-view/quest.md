---
slug: "react-p-tree-view"
title: "Practice: A Recursive Tree View"
type: "code"
language: "jsx"
xp: 15
hints: ["Write a helper component that renders one level and calls itself for `node.children`, passing a different `role`."]
---
# Practice: A Recursive Tree View

File explorers, nested comments and category menus are **trees**. A component that renders itself for its children is the natural fit.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`, just like React Testing Library queries but without a browser.

## Your task
Write `<Tree nodes expanded onToggle />`, where `nodes` is `[{ id, name, children? }]` and `expanded` is a `Set` of ids:
- Render `<ul role="tree">` at the top level, and `<ul role="group">` for nested lists.
- Each node is an `<li role="treeitem">` containing its name.
- Nodes **with** children also get `aria-expanded` (true or false) and a `<button aria-label="Expand <name>">` (or `"Collapse <name>"` when expanded) before the name. Clicking calls `onToggle(id)`.
- Leaf nodes have no button and no `aria-expanded`.
- Children render only when the node is expanded.
