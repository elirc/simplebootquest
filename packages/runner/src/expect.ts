import { format } from './format.js';

export class AssertionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AssertionError';
  }
}

/** Structural equality, like Jest/Vitest's toEqual (ignores undefined properties). */
export function deepEqual(a: unknown, b: unknown, seen = new Map<object, object>()): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  if (seen.get(a) === b) return true;
  seen.set(a, b);

  if (a instanceof Date || b instanceof Date) {
    return a instanceof Date && b instanceof Date && a.getTime() === b.getTime();
  }
  if (a instanceof RegExp || b instanceof RegExp) {
    return a instanceof RegExp && b instanceof RegExp && a.toString() === b.toString();
  }
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i], seen));
  }
  if (a instanceof Map || b instanceof Map) {
    if (!(a instanceof Map && b instanceof Map) || a.size !== b.size) return false;
    for (const [k, v] of a) if (!b.has(k) || !deepEqual(v, b.get(k), seen)) return false;
    return true;
  }
  if (a instanceof Set || b instanceof Set) {
    if (!(a instanceof Set && b instanceof Set) || a.size !== b.size) return false;
    for (const v of a) if (!b.has(v)) return false;
    return true;
  }
  const keysA = Object.keys(a).filter((k) => (a as Record<string, unknown>)[k] !== undefined);
  const keysB = Object.keys(b).filter((k) => (b as Record<string, unknown>)[k] !== undefined);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((k) =>
    deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], seen),
  );
}

type Matchers = {
  toBe(expected: unknown): void;
  toEqual(expected: unknown): void;
  toStrictEqual(expected: unknown): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
  toBeNull(): void;
  toBeUndefined(): void;
  toBeDefined(): void;
  toBeNaN(): void;
  toBeGreaterThan(n: number): void;
  toBeGreaterThanOrEqual(n: number): void;
  toBeLessThan(n: number): void;
  toBeLessThanOrEqual(n: number): void;
  toBeCloseTo(n: number, digits?: number): void;
  toBeInstanceOf(ctor: abstract new (...args: never[]) => unknown): void;
  toBeTypeOf(type: string): void;
  toContain(item: unknown): void;
  toContainEqual(item: unknown): void;
  toHaveLength(n: number): void;
  toHaveProperty(path: string, value?: unknown): void;
  toMatch(pattern: RegExp | string): void;
  toMatchObject(subset: object): void;
  toThrow(expected?: string | RegExp | (new (...args: never[]) => Error)): void;
};

type AsyncMatchers = { [K in keyof Matchers]: (...args: Parameters<Matchers[K]>) => Promise<void> };

export interface Expectation extends Matchers {
  not: Matchers;
  resolves: AsyncMatchers & { not: AsyncMatchers };
  rejects: AsyncMatchers & { not: AsyncMatchers };
}

function matchesSubset(actual: unknown, subset: unknown): boolean {
  if (typeof subset !== 'object' || subset === null) return deepEqual(actual, subset);
  if (typeof actual !== 'object' || actual === null) return false;
  if (Array.isArray(subset)) {
    return Array.isArray(actual) && actual.length === subset.length && subset.every((s, i) => matchesSubset(actual[i], s));
  }
  return Object.entries(subset).every(([k, v]) => matchesSubset((actual as Record<string, unknown>)[k], v));
}

function getPath(obj: unknown, path: string): { found: boolean; value: unknown } {
  let current: unknown = obj;
  for (const key of path.split('.')) {
    if (current === null || current === undefined || !(key in Object(current))) return { found: false, value: undefined };
    current = (current as Record<string, unknown>)[key];
  }
  return { found: true, value: current };
}

function buildMatchers(actual: unknown, negate: boolean): Matchers {
  const assert = (pass: boolean, message: string, negMessage: string) => {
    if (pass === negate) throw new AssertionError(negate ? negMessage : message);
  };
  const a = () => format(actual);

  return {
    toBe: (e) => assert(Object.is(actual, e), `Expected ${a()} to be ${format(e)}`, `Expected ${a()} not to be ${format(e)}`),
    toEqual: (e) => assert(deepEqual(actual, e), `Expected ${a()} to equal ${format(e)}`, `Expected ${a()} not to equal ${format(e)}`),
    toStrictEqual: (e) => assert(deepEqual(actual, e), `Expected ${a()} to equal ${format(e)}`, `Expected ${a()} not to equal ${format(e)}`),
    toBeTruthy: () => assert(Boolean(actual), `Expected ${a()} to be truthy`, `Expected ${a()} to be falsy`),
    toBeFalsy: () => assert(!actual, `Expected ${a()} to be falsy`, `Expected ${a()} to be truthy`),
    toBeNull: () => assert(actual === null, `Expected ${a()} to be null`, `Expected value not to be null`),
    toBeUndefined: () => assert(actual === undefined, `Expected ${a()} to be undefined`, `Expected value not to be undefined`),
    toBeDefined: () => assert(actual !== undefined, `Expected value to be defined`, `Expected ${a()} to be undefined`),
    toBeNaN: () => assert(Number.isNaN(actual), `Expected ${a()} to be NaN`, `Expected value not to be NaN`),
    toBeGreaterThan: (n) => assert((actual as number) > n, `Expected ${a()} to be greater than ${n}`, `Expected ${a()} not to be greater than ${n}`),
    toBeGreaterThanOrEqual: (n) => assert((actual as number) >= n, `Expected ${a()} to be >= ${n}`, `Expected ${a()} not to be >= ${n}`),
    toBeLessThan: (n) => assert((actual as number) < n, `Expected ${a()} to be less than ${n}`, `Expected ${a()} not to be less than ${n}`),
    toBeLessThanOrEqual: (n) => assert((actual as number) <= n, `Expected ${a()} to be <= ${n}`, `Expected ${a()} not to be <= ${n}`),
    toBeCloseTo: (n, digits = 2) =>
      assert(
        typeof actual === 'number' && Math.abs(actual - n) < 10 ** -digits / 2,
        `Expected ${a()} to be close to ${n}`,
        `Expected ${a()} not to be close to ${n}`,
      ),
    toBeInstanceOf: (ctor) =>
      assert(actual instanceof (ctor as never), `Expected ${a()} to be an instance of ${ctor.name}`, `Expected ${a()} not to be an instance of ${ctor.name}`),
    toBeTypeOf: (type) => assert(typeof actual === type, `Expected typeof ${a()} to be "${type}" but got "${typeof actual}"`, `Expected typeof ${a()} not to be "${type}"`),
    toContain: (item) => {
      const pass =
        typeof actual === 'string'
          ? actual.includes(String(item))
          : Array.isArray(actual) || actual instanceof Set
            ? [...actual].includes(item)
            : false;
      assert(pass, `Expected ${a()} to contain ${format(item)}`, `Expected ${a()} not to contain ${format(item)}`);
    },
    toContainEqual: (item) =>
      assert(
        Array.isArray(actual) && actual.some((v) => deepEqual(v, item)),
        `Expected ${a()} to contain an item equal to ${format(item)}`,
        `Expected ${a()} not to contain an item equal to ${format(item)}`,
      ),
    toHaveLength: (n) => {
      const len = (actual as { length?: unknown } | null)?.length;
      assert(len === n, `Expected ${a()} to have length ${n} but it has length ${format(len)}`, `Expected ${a()} not to have length ${n}`);
    },
    toHaveProperty: (path, ...rest) => {
      const { found, value } = getPath(actual, path);
      const checkValue = rest.length > 0;
      const pass = found && (!checkValue || deepEqual(value, rest[0]));
      assert(
        pass,
        checkValue ? `Expected property "${path}" to equal ${format(rest[0])} but got ${format(value)}` : `Expected ${a()} to have property "${path}"`,
        `Expected ${a()} not to have property "${path}"`,
      );
    },
    toMatch: (pattern) => {
      const pass = typeof actual === 'string' && (typeof pattern === 'string' ? actual.includes(pattern) : pattern.test(actual));
      assert(pass, `Expected ${a()} to match ${format(pattern)}`, `Expected ${a()} not to match ${format(pattern)}`);
    },
    toMatchObject: (subset) =>
      assert(matchesSubset(actual, subset), `Expected ${a()} to match ${format(subset)}`, `Expected ${a()} not to match ${format(subset)}`),
    toThrow: (expected) => {
      if (typeof actual !== 'function') throw new AssertionError('toThrow() expects a function, e.g. expect(() => fn()).toThrow()');
      let thrown: unknown;
      let didThrow = false;
      try {
        (actual as () => unknown)();
      } catch (err) {
        didThrow = true;
        thrown = err;
      }
      const message = thrown instanceof Error ? thrown.message : String(thrown);
      let pass = didThrow;
      if (didThrow && expected !== undefined) {
        if (typeof expected === 'string') pass = message.includes(expected);
        else if (expected instanceof RegExp) pass = expected.test(message);
        else pass = thrown instanceof expected;
      }
      const what = expected === undefined ? '' : ` ${typeof expected === 'function' ? expected.name : format(expected)}`;
      assert(
        pass,
        didThrow ? `Expected function to throw${what} but it threw ${format(thrown)}` : `Expected function to throw${what} but it did not throw`,
        `Expected function not to throw${what} but it threw ${format(thrown)}`,
      );
    },
  };
}

function asyncMatchers(promiseLike: unknown, mode: 'resolves' | 'rejects', negate: boolean): AsyncMatchers {
  const keys = Object.keys(buildMatchers(undefined, false)) as (keyof Matchers)[];
  const out = {} as Record<string, (...args: unknown[]) => Promise<void>>;
  for (const key of keys) {
    out[key] = async (...args: unknown[]) => {
      let settled: unknown;
      if (mode === 'resolves') {
        try {
          settled = await promiseLike;
        } catch (err) {
          throw new AssertionError(`Expected promise to resolve but it rejected with ${format(err)}`);
        }
      } else {
        try {
          const value = await promiseLike;
          throw new AssertionError(`Expected promise to reject but it resolved with ${format(value)}`);
        } catch (err) {
          if (err instanceof AssertionError && err.message.startsWith('Expected promise to reject')) throw err;
          settled = err;
        }
      }
      let target = settled;
      // `await expect(p).rejects.toThrow('msg')` should check the rejection reason.
      if (key === 'toThrow') {
        target = () => {
          throw settled;
        };
      }
      (buildMatchers(target, negate)[key] as (...a: unknown[]) => void)(...args);
    };
  }
  return out as unknown as AsyncMatchers;
}

export function expect(actual: unknown): Expectation {
  const resolves = Object.assign(asyncMatchers(actual, 'resolves', false), { not: asyncMatchers(actual, 'resolves', true) });
  const rejects = Object.assign(asyncMatchers(actual, 'rejects', false), { not: asyncMatchers(actual, 'rejects', true) });
  return Object.assign(buildMatchers(actual, false), {
    not: buildMatchers(actual, true),
    resolves,
    rejects,
  });
}
