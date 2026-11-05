function createSessionStore({ idleMs, absoluteMs, now, newId }) {
  const sessions = new Map();
  return {
    create(userId) { const id = newId(); sessions.set(id, { userId }); return id; },
    get(id) { return sessions.get(id) ?? null; },
    destroy(id) {},
    destroyAllFor(userId) { return 0; },
  };
}
