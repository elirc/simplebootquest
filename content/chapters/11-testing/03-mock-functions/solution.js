function fn(impl) {
  let implementation = impl;
  let hasReturnValue = false;
  let returnValue;
  let onceQueue = [];

  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    let result;
    if (onceQueue.length > 0) result = onceQueue.shift();
    else if (hasReturnValue) result = returnValue;
    else if (implementation) result = implementation(...args);
    mockFn.mock.results.push(result);
    return result;
  };

  mockFn.mock = {
    calls: [],
    results: [],
    get lastCall() {
      return this.calls[this.calls.length - 1];
    },
  };

  mockFn.mockReturnValue = (value) => {
    hasReturnValue = true;
    returnValue = value;
    return mockFn;
  };
  mockFn.mockReturnValueOnce = (value) => {
    onceQueue.push(value);
    return mockFn;
  };
  mockFn.mockImplementation = (f) => {
    implementation = f;
    hasReturnValue = false;
    return mockFn;
  };
  mockFn.mockReset = () => {
    mockFn.mock.calls.length = 0;
    mockFn.mock.results.length = 0;
    implementation = undefined;
    hasReturnValue = false;
    returnValue = undefined;
    onceQueue = [];
    return mockFn;
  };
  return mockFn;
}
