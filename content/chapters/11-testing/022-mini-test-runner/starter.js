function createRunner() {
  return {
    describe(name, fn) {},
    it(name, fn) {},
    beforeEach(fn) {},
    afterEach(fn) {},
    async run() {
      return [];
    },
  };
}
