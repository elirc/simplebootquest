function todosReducer(state, action) {
  switch (action.type) {
    case 'added': {
      const title = action.title.trim();
      if (!title) return state;
      return { ...state, todos: [...state.todos, { id: action.id, title, done: false }] };
    }
    case 'toggled':
      return { ...state, todos: state.todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t)) };
    case 'renamed': {
      const title = action.title.trim();
      if (!title) return state;
      return { ...state, todos: state.todos.map((t) => (t.id === action.id ? { ...t, title } : t)) };
    }
    case 'deleted':
      return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };
    case 'cleared_done':
      return { ...state, todos: state.todos.filter((t) => !t.done) };
    case 'filter_changed':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

function selectVisible(state) {
  if (state.filter === 'active') return state.todos.filter((t) => !t.done);
  if (state.filter === 'done') return state.todos.filter((t) => t.done);
  return state.todos;
}
