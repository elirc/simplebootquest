function reposReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: state.length + 1, name: action.name, done: false }];
    case 'toggle':
      return state.map((x) => (x.id === action.id ? { ...x, done: !x.done } : x));
    case 'clearDone':
      return state.filter((x) => !x.done);
    default:
      return state;
  }
}

function RepoBoard({ initial }) {
  const [items, dispatch] = useReducer(reposReducer, initial);
  return (
    <div>
      <ul>
        {items.map((x) => (
          <li key={x.id} aria-checked={x.done} onClick={() => dispatch({ type: 'toggle', id: x.id })}>{x.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'clearDone' })}>Clear done</button>
    </div>
  );
}
