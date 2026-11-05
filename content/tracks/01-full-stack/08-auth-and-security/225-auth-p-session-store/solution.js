function createSessionStore({ idleMs, absoluteMs, now, newId }) {
  const sessions = new Map();
  return {
    create(userId) {
      const id = newId();
      const t = now();
      sessions.set(id, { userId, createdAt: t, idleUntil: t + idleMs });
      return id;
    },
    get(id) {
      const s = sessions.get(id);
      if (!s) return null;
      const t = now();
      if (t > s.idleUntil || t > s.createdAt + absoluteMs) {
        sessions.delete(id);
        return null;
      }
      s.idleUntil = t + idleMs;
      return { userId: s.userId };
    },
    destroy(id) {
      sessions.delete(id);
    },
    destroyAllFor(userId) {
      let n = 0;
      for (const [id, s] of sessions) {
        if (s.userId === userId) {
          sessions.delete(id);
          n++;
        }
      }
      return n;
    },
  };
}
