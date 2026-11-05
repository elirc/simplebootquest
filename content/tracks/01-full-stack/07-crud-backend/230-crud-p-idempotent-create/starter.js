function createStore() {
  const todos = [];
  return {
    create(userId, { clientId, title }) {
      const todo = { id: todos.length + 1, userId, clientId, title };
      todos.push(todo);
      return { status: 201, todo };
    },
    count: () => todos.length,
  };
}
