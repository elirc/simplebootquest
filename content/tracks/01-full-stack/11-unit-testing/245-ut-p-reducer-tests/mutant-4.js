// mutant: clearDone removes the wrong todos
function todosReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const title = action.title.trim();
      if (!title) return state;
      return { todos: [...state.todos, { id: state.nextId, title, done: false }], nextId: state.nextId + 1 };
    }
    case 'toggle':
      return { ...state, todos: state.todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t)) };
    case 'remove':
      return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };
    case 'clearDone':
      return { ...state, todos: state.todos.filter((t) => t.done) };
    default:
      return state;
  }
}
