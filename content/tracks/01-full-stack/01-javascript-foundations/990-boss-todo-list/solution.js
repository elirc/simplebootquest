function createTodoList() {
  const todos = [];
  let nextId = 1;

  function cleanTitle(title) {
    const trimmed = String(title ?? '').trim();
    if (trimmed === '') throw new Error('Title is required');
    return trimmed;
  }

  function find(id) {
    return todos.find((t) => t.id === id);
  }

  return {
    add(title) {
      const todo = { id: nextId++, title: cleanTitle(title), done: false };
      todos.push(todo);
      return todo;
    },
    list() {
      return [...todos];
    },
    get(id) {
      return find(id);
    },
    toggle(id) {
      const todo = find(id);
      if (!todo) return undefined;
      todo.done = !todo.done;
      return todo;
    },
    rename(id, title) {
      const todo = find(id);
      if (!todo) return undefined;
      todo.title = cleanTitle(title);
      return todo;
    },
    remove(id) {
      const index = todos.findIndex((t) => t.id === id);
      if (index === -1) return false;
      todos.splice(index, 1);
      return true;
    },
    stats() {
      const done = todos.filter((t) => t.done).length;
      return { total: todos.length, done, remaining: todos.length - done };
    },
  };
}
