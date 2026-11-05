class NotFoundError extends Error {
  constructor(message = 'Not found') {
    super(message);
    this.status = 404;
  }
}

function createTodoService(repo) {
  const own = (userId, id) => {
    const todo = repo.findOne({ id, userId });
    if (!todo) throw new NotFoundError('Todo not found');
    return todo;
  };
  return {
    list: (userId) => repo.findMany({ userId }),
    get: (userId, id) => own(userId, id),
    create: (userId, { title }) => repo.insert({ title, done: false, userId }),
    update(userId, id, changes) {
      own(userId, id);
      const allowed = {};
      if ('title' in changes) allowed.title = changes.title;
      if ('done' in changes) allowed.done = changes.done;
      return repo.update(id, allowed);
    },
    remove(userId, id) {
      own(userId, id);
      return repo.remove(id);
    },
  };
}
