function createPriorityQueue() {
  const queue = [];
  let running = false;
  let seq = 0;
  let idleWaiters = [];

  async function next() {
    if (running) return;
    const job = queue.shift();
    if (!job) {
      idleWaiters.forEach((r) => r());
      idleWaiters = [];
      return;
    }
    running = true;
    try {
      job.resolve(await job.task());
    } catch (err) {
      job.reject(err);
    } finally {
      running = false;
      next();
    }
  }

  return {
    add(task, priority = 0) {
      return new Promise((resolve, reject) => {
        queue.push({ task, priority, order: seq++, resolve, reject });
        queue.sort((a, b) => b.priority - a.priority || a.order - b.order);
        queueMicrotask(next);
      });
    },
    onIdle() {
      if (!running && queue.length === 0) return Promise.resolve();
      return new Promise((r) => idleWaiters.push(r));
    },
  };
}
