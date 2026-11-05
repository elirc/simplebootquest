function fakeTimers() {
  let now = 0;
  let id = 0;
  const pending = new Map();
  return {
    setTimeout: (cb, ms) => { pending.set(++id, { cb, at: now + ms }); return id; },
    clearTimeout: (i) => pending.delete(i),
    advance(ms) {
      now += ms;
      for (const [i, t] of [...pending]) if (t.at <= now) { pending.delete(i); t.cb(); }
    },
  };
}

test('calls fn after the delay', () => {
  // ...
});
