class NotFoundError extends Error {
  constructor(message = 'Not found') {
    super(message);
    this.status = 404;
  }
}

function createTodoService(repo) {
  return {
    list: (userId) => repo.findMany({}),
    get: (userId, id) => repo.findOne({ id }),
    create: (userId, body) => repo.insert(body),
    update: (userId, id, changes) => repo.update(id, changes),
    remove: (userId, id) => repo.remove(id),
  };
}
