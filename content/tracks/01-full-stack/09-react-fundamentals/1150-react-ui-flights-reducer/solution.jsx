function flightsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: state.length + 1, number: action.number, done: false }];
    case 'toggle':
      return state.map((x) => (x.id === action.id ? { ...x, done: !x.done } : x));
    case 'clearDone':
      return state.filter((x) => !x.done);
    default:
      return state;
  }
}

function FlightBoard({ initial }) {
  const [items, dispatch] = useReducer(flightsReducer, initial);
  return (
    <div>
      <ul>
        {items.map((x) => (
          <li key={x.id} aria-checked={x.done} onClick={() => dispatch({ type: 'toggle', id: x.id })}>{x.number}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'clearDone' })}>Clear done</button>
    </div>
  );
}
