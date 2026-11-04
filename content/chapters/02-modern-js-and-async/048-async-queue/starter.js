function createQueue() {
  return {
    add(task) {
      return task();
    },
    size() {
      return 0;
    },
  };
}
