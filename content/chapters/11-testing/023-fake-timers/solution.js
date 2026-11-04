function createFakeClock() {
  let time = 0;
  let nextId = 1;
  let order = 0;
  const timers = new Map();

  function schedule(fn, ms, interval) {
    const id = nextId++;
    timers.set(id, { id, fn, at: time + Math.max(0, ms), interval: interval ? Math.max(1, ms) : null, order: order++ });
    return id;
  }

  return {
    now: () => time,
    setTimeout: (fn, ms = 0) => schedule(fn, ms, false),
    clearTimeout: (id) => timers.delete(id),
    setInterval: (fn, ms) => schedule(fn, ms, true),
    clearInterval: (id) => timers.delete(id),
    advance(ms) {
      const target = time + ms;
      for (;;) {
        const due = [...timers.values()]
          .filter((t) => t.at <= target)
          .sort((a, b) => a.at - b.at || a.order - b.order)[0];
        if (!due) break;
        time = due.at;
        if (due.interval) {
          due.at += due.interval;
          due.order = order++;
        } else {
          timers.delete(due.id);
        }
        due.fn();
      }
      time = target;
    },
    pending: () => timers.size,
  };
}
