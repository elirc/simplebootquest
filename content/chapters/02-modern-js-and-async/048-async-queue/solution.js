function createQueue() {
  let tail = Promise.resolve();
  let pending = 0;
  return {
    add(task) {
      pending++;
      const result = tail.then(() => task());
      tail = result.catch(() => {}).finally(() => {
        pending--;
      });
      return result;
    },
    size() {
      return pending;
    },
  };
}
