---
slug: react-lists-and-conditionals
title: Lists & Conditional Rendering
type: code
language: jsx
xp: 25
hints: ["Filter first, then check for an empty list.", "Put `key={todo.id}` on the element returned from `map`."]
resources: [{"title": "React docs: Rendering lists", "url": "https://react.dev/learn/rendering-lists"}, {"title": "React docs: Conditional rendering", "url": "https://react.dev/learn/conditional-rendering"}]
---
# Lists & Conditional Rendering

### Rendering lists

Use `map` to turn data into elements. Every item needs a stable, unique **`key`**:

```jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

Keys tell React which item is which between renders. **Don't use the array index** as the key if the list can be reordered or filtered, because React will mix up items' state. Database ids are perfect keys.

### Conditional rendering

```jsx
{isLoading && <Spinner />}                   // render or nothing
{error ? <ErrorBox /> : <Results />}         // either/or
if (items.length === 0) return <Empty />;    // early return
```

⚠️ The `&&` gotcha: `{count && <Badge />}` renders a literal **`0`** when `count` is 0. Use `{count > 0 && <Badge />}`.

## Your task

1. `TodoItem({ todo })` renders `<li className="todo">` (or `className="todo done"` when `todo.done`) containing the title.
2. `TodoList({ todos, filter })`:
   - `filter` is `'all'` (default), `'active'` or `'done'`.
   - If no todos match, render `<p className="empty">Nothing here!</p>`.
   - Otherwise render a `<ul>` of `<TodoItem>`s, each with `key={todo.id}`.
3. `Counter({ count })` renders `<span className="badge">{count}</span>` when `count > 0`, and **nothing** (`null`) otherwise.
