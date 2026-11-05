function createRouter() {
  return {
    get() { return this; },
    post() { return this; },
    patch() { return this; },
    delete() { return this; },
    async handle(req, res) { return false; },
  };
}
