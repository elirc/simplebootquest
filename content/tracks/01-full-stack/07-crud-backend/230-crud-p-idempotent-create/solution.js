function createStore() {
  const todos = [];
  const byClientId = new Map();
  return {
    create(userId, { clientId, title }) {
      const key = clientId === undefined ? null : `${userId}:${clientId}`;
      if (key && byClientId.has(key)) {
        const existing = byClientId.get(key);
        if (existing.title !== title) return { status: 409, error: 'clientId already used with different data' };
        return { status: 200, todo: existing };
      }
      const todo = { id: todos.length + 1, userId, clientId, title };
      todos.push(todo);
      if (key) byClientId.set(key, todo);
      return { status: 201, todo };
    },
    count: () => todos.length,
  };
}
