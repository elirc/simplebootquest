function defineFactory(defaults) {
  return {
    build: (overrides = {}) => ({ ...defaults(1), ...overrides }),
    buildList: (count) => [],
    reset: () => {},
  };
}
