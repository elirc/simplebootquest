function createRefreshStore({ newToken }) {
  const tokens = new Map();
  const families = new Map();
  let nextFamily = 1;
  return {
    issue(userId) {
      const family = nextFamily++;
      families.set(family, { userId, revoked: false });
      const t = newToken();
      tokens.set(t, { family, used: false });
      return t;
    },
    rotate(token) {
      const entry = tokens.get(token);
      if (!entry) return { ok: false, reason: 'invalid' };
      const family = families.get(entry.family);
      if (family.revoked) return { ok: false, reason: 'invalid' };
      if (entry.used) {
        family.revoked = true;
        return { ok: false, reason: 'reuse detected' };
      }
      entry.used = true;
      const t = newToken();
      tokens.set(t, { family: entry.family, used: false });
      return { ok: true, userId: family.userId, token: t };
    },
  };
}
