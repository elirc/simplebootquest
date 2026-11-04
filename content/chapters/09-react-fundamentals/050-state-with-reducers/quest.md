---
slug: react-state-with-reducers
title: State with Reducers
type: code
language: jsx
xp: 30
hints: ["Every case returns `{ ...state, todos: ... }`.", "The default case returns `state` itself."]
resources: [{"title": "React docs: Extracting state logic into a reducer", "url": "https://react.dev/learn/extracting-state-logic-into-a-reducer"}]
---
# State with Reducers

For simple values, use `useState`:

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount((c) => c + 1)}>+1</button>
```

When state has several related operations, a **reducer** keeps all the update logic in one pure function:

```jsx
function todosReducer(state, action) {
  switch (action.type) {
    case 'added':
      return [...state, { id: action.id, title: action.title, done: false }];
    case 'toggled':
      return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case 'deleted':
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

const [todos, dispatch] = useReducer(todosReducer, []);
dispatch({ type: 'added', id: 1, title: 'Learn reducers' });
```

### The golden rule: never mutate

Always return a **new** array or object. `state.push(...)` or `todo.done = true` changes the old state in place. React then sees the same reference, assumes nothing changed, and the UI doesn't update.

| Instead of | Use |
|------------|-----|
| `arr.push(x)` | `[...arr, x]` |
| `arr.splice(i, 1)` | `arr.filter(...)` |
| `arr[i] = x` | `arr.map(...)` |
| `obj.key = v` | `{ ...obj, key: v }` |

Reducers are pure functions, so they're trivial to test. No React needed!

## Your task

Implement `todosReducer(state, action)`. The state is `{ todos: [], filter: 'all' }`.

| Action | Effect |
|--------|--------|
| `{ type: 'added', id, title }` | Append `{ id, title: <trimmed>, done: false }`. Ignore it if the trimmed title is empty. |
| `{ type: 'toggled', id }` | Flip `done` for that todo |
| `{ type: 'renamed', id, title }` | Change the title (ignore empty titles) |
| `{ type: 'deleted', id }` | Remove that todo |
| `{ type: 'cleared_done' }` | Remove all done todos |
| `{ type: 'filter_changed', filter }` | Set `filter` |
| anything else | Return the **same** state object |

Never mutate the state.

Also implement `selectVisible(state)`, which returns the todos matching the filter (`'all' | 'active' | 'done'`). This is *derived state*.
