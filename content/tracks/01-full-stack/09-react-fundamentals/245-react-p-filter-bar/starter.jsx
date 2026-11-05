function visibleTodos(todos, filter, search) {
  return todos;
}

function counts(todos) {
  return { all: todos.length, active: 0, done: 0 };
}

function FilterBar({ todos, filter, onFilter }) {
  return <div><button>All</button><button>Active</button><button>Done</button></div>;
}
