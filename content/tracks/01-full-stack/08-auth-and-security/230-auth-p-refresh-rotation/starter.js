function createRefreshStore({ newToken }) {
  const tokens = new Map();
  return {
    issue(userId) { const t = newToken(); tokens.set(t, userId); return t; },
    rotate(token) {
      if (!tokens.has(token)) return { ok: false, reason: 'invalid' };
      const t = newToken();
      tokens.set(t, tokens.get(token));
      return { ok: true, userId: tokens.get(token), token: t };
    },
  };
}
