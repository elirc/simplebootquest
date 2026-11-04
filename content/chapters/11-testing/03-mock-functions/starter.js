function fn(impl) {
  const mockFn = (...args) => {
    // TODO
  };
  mockFn.mock = { calls: [], results: [] };
  return mockFn;
}
