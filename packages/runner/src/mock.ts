/**
 * A Vitest-compatible mock function (`vi.fn()`), so learners can write
 * tests with test doubles exactly as they would in a real project.
 */
export interface MockFunction<A extends unknown[] = unknown[], R = unknown> {
  (...args: A): R;
  mock: { calls: A[]; results: { type: 'return' | 'throw'; value: unknown }[]; lastCall: A | undefined };
  mockReturnValue(value: R): MockFunction<A, R>;
  mockReturnValueOnce(value: R): MockFunction<A, R>;
  mockResolvedValue(value: Awaited<R> | unknown): MockFunction<A, R>;
  mockRejectedValue(error: unknown): MockFunction<A, R>;
  mockImplementation(impl: (...args: A) => R): MockFunction<A, R>;
  mockClear(): MockFunction<A, R>;
  readonly __isMock: true;
}

export function fn<A extends unknown[] = unknown[], R = unknown>(impl?: (...args: A) => R): MockFunction<A, R> {
  let implementation = impl;
  const once: (() => R)[] = [];

  const mockFn = ((...args: A): R => {
    mockFn.mock.calls.push(args);
    mockFn.mock.lastCall = args;
    try {
      const next = once.shift();
      const value = next ? next() : (implementation?.(...args) as R);
      mockFn.mock.results.push({ type: 'return', value });
      return value;
    } catch (err) {
      mockFn.mock.results.push({ type: 'throw', value: err });
      throw err;
    }
  }) as MockFunction<A, R>;

  Object.assign(mockFn, {
    __isMock: true,
    mock: { calls: [], results: [], lastCall: undefined },
    mockReturnValue: (value: R) => ((implementation = () => value), mockFn),
    mockReturnValueOnce: (value: R) => (once.push(() => value), mockFn),
    mockResolvedValue: (value: unknown) => ((implementation = () => Promise.resolve(value) as R), mockFn),
    mockRejectedValue: (error: unknown) => ((implementation = () => Promise.reject(error) as R), mockFn),
    mockImplementation: (f: (...args: A) => R) => ((implementation = f), mockFn),
    mockClear: () => {
      mockFn.mock.calls.length = 0;
      mockFn.mock.results.length = 0;
      mockFn.mock.lastCall = undefined;
      return mockFn;
    },
  });
  return mockFn;
}

export function isMock(value: unknown): value is MockFunction {
  return typeof value === 'function' && (value as MockFunction).__isMock === true;
}
