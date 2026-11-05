import { describe, expect as vexpect, it } from 'vitest';
import initSqlJs from 'sql.js';
import { expect, runQuest } from './index.js';

const loadSql = () => initSqlJs();

describe('runQuest (js)', () => {
  it('passes when the code satisfies the tests', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'function add(a, b) { return a + b; }',
      tests: "test('adds', () => expect(add(1, 2)).toBe(3));",
    });
    vexpect(r.passed).toBe(true);
    vexpect(r.results).toHaveLength(1);
  });

  it('reports failing assertions with readable messages', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'function add(a, b) { return a - b; }',
      tests: "test('adds', () => expect(add(1, 2)).toBe(3));",
    });
    vexpect(r.passed).toBe(false);
    vexpect(r.results[0]?.error).toBe('Expected -1 to be 3');
  });

  it('captures console output', async () => {
    const r = await runQuest({ language: 'js', code: 'console.log("hi", { a: 1 });', tests: "test('x', () => {});" });
    vexpect(r.logs).toEqual(['hi { a: 1 }']);
  });

  it('lets learner code shadow injected helpers', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'const text = "mine"; function find() { return 1; }',
      tests: "test('shadowed', () => { expect(text).toBe('mine'); expect(find()).toBe(1); });",
    });
    vexpect(r.error).toBeUndefined();
    vexpect(r.passed).toBe(true);
  });

  it('reports syntax errors', async () => {
    const r = await runQuest({ language: 'js', code: 'function (', tests: "test('x', () => {});" });
    vexpect(r.passed).toBe(false);
    vexpect(r.error).toMatch(/your code/);
  });

  it('supports exports and async tests', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'export async function later(v) { await sleep(1); return v; }',
      tests: "test('async', async () => { await expect(later(5)).resolves.toBe(5); });",
    });
    vexpect(r.passed).toBe(true);
  });

  it('times out never-resolving tests', async () => {
    const r = await runQuest(
      { language: 'js', code: '', tests: "test('hang', () => new Promise(() => {}));" },
      { testTimeoutMs: 50 },
    );
    vexpect(r.results[0]?.error).toMatch(/timed out/);
  });
});

describe('runQuest (ts + jsx)', () => {
  it('strips TypeScript types', async () => {
    const r = await runQuest({
      language: 'ts',
      code: 'interface P { n: number }\nexport function dbl(p: P): number { return p.n * 2; }',
      tests: "test('dbl', () => expect(dbl({ n: 2 })).toBe(4));",
    });
    vexpect(r.passed).toBe(true);
  });

  it('renders JSX components', async () => {
    const r = await runQuest({
      language: 'jsx',
      code: 'function Hello({ name }) { return <h1 className="t">Hi, {name}!</h1>; }',
      tests: `test('renders', () => {
        const el = render(<Hello name="Ada" />);
        expect(el.type).toBe('h1');
        expect(el.props.className).toBe('t');
        expect(text(el)).toBe('Hi, Ada!');
      });`,
    });
    vexpect(r.error).toBeUndefined();
    vexpect(r.passed).toBe(true);
  });
});

describe('runQuest (sql)', () => {
  const setup = "CREATE TABLE t (id INTEGER PRIMARY KEY, name TEXT); INSERT INTO t (name) VALUES ('a'), ('b');";
  it('exposes the result rows', async () => {
    const r = await runQuest(
      { language: 'sql', setup, code: 'SELECT name FROM t ORDER BY name DESC;', tests: "test('rows', () => expect(result).toEqual([{ name: 'b' }, { name: 'a' }]));" },
      { loadSql },
    );
    vexpect(r.passed).toBe(true);
  });

  it('reports SQL errors', async () => {
    const r = await runQuest({ language: 'sql', setup, code: 'SELEC name FROM t', tests: "test('x', () => {});" }, { loadSql });
    vexpect(r.error).toMatch(/SQL error/);
  });
});

describe('describe, hooks and vi.fn', () => {
  it('prefixes names and runs hooks around each test', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'const log = [];',
      tests: `
        describe('cart', () => {
          beforeEach(() => log.push('before'));
          afterEach(() => log.push('after'));
          it('adds', () => log.push('test'));
          describe('empty', () => { it('is empty', () => {}); });
        });
        test('order', () => expect(log).toEqual(['before', 'test', 'after', 'before', 'after']));
      `,
    });
    vexpect(r.results.map((t) => t.name)).toEqual(['cart > adds', 'cart > empty > is empty', 'order']);
    vexpect(r.passed).toBe(true);
  });

  it('supports Vitest-style mocks and call matchers', async () => {
    const r = await runQuest({
      language: 'js',
      code: 'function notify(send, user) { if (user.optIn) send(user.email, "hi"); }',
      tests: `
        test('sends', () => {
          const send = vi.fn();
          notify(send, { optIn: true, email: 'a@b.co' });
          expect(send).toHaveBeenCalledTimes(1);
          expect(send).toHaveBeenCalledWith('a@b.co', 'hi');
        });
        test('does not send', () => {
          const send = vi.fn().mockReturnValue(1);
          notify(send, { optIn: false });
          expect(send).not.toHaveBeenCalled();
        });
        test('resolved values', async () => {
          const get = vi.fn().mockResolvedValue(5);
          await expect(get()).resolves.toBe(5);
          expect(get.mock.calls).toEqual([[]]);
        });
      `,
    });
    vexpect(r.error).toBeUndefined();
    vexpect(r.passed).toBe(true);
  });

  it('reports useful messages for call matchers', async () => {
    const r = await runQuest({ language: 'js', code: '', tests: "test('x', () => { const f = vi.fn(); f(1); expect(f).toHaveBeenCalledWith(2); });" });
    vexpect(r.results[0]?.error).toBe('Expected the mock to have been called with [2], but its calls were [[1]]');
  });
});

describe('write-tests mode (mutation testing)', () => {
  const subject = 'function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }';
  const mutants = [
    { name: 'ignores the maximum', code: 'function clamp(n, min, max) { return Math.max(min, n); }' },
    { name: 'ignores the minimum', code: 'function clamp(n, min, max) { return Math.min(max, n); }' },
  ];
  const run = (tests: string) => runQuest({ language: 'js', code: tests, tests: '', subject, mutants });

  it('passes when tests accept the subject and catch every mutant', async () => {
    const r = await run("test('max', () => expect(clamp(9, 0, 5)).toBe(5)); test('min', () => expect(clamp(-1, 0, 5)).toBe(0));");
    vexpect(r.passed).toBe(true);
    vexpect(r.results.map((t) => t.name)).toEqual([
      'Your 2 test(s) pass against the correct implementation',
      'Catches the bug: ignores the maximum',
      'Catches the bug: ignores the minimum',
    ]);
  });

  it('fails when a mutant survives', async () => {
    const r = await run("test('max', () => expect(clamp(9, 0, 5)).toBe(5));");
    vexpect(r.passed).toBe(false);
    vexpect(r.results[2]).toMatchObject({ passed: false, name: 'Catches the bug: ignores the minimum' });
  });

  it('fails when a test is wrong about the correct code', async () => {
    const r = await run("test('wrong', () => expect(clamp(9, 0, 5)).toBe(9));");
    vexpect(r.results[0]?.passed).toBe(false);
    vexpect(r.results[0]?.error).toMatch(/the test is wrong/);
  });

  it('requires at least one test', async () => {
    const r = await run('// nothing yet');
    vexpect(r.passed).toBe(false);
    vexpect(r.error).toMatch(/No tests were found/);
  });
});

describe('expect', () => {
  it('supports .not and deep equality', () => {
    expect({ a: [1, { b: 2 }] }).toEqual({ a: [1, { b: 2 }] });
    expect([1, 2]).not.toEqual([2, 1]);
    vexpect(() => expect(1).not.toBe(1)).toThrow('not to be');
  });

  it('checks thrown errors', () => {
    expect(() => {
      throw new TypeError('bad input');
    }).toThrow('bad input');
    expect(() => {
      throw new TypeError('bad input');
    }).toThrow(TypeError);
    vexpect(() => expect(() => 1).toThrow()).toThrow('did not throw');
  });

  it('handles rejects', async () => {
    await expect(Promise.reject(new Error('nope'))).rejects.toThrow('nope');
    await vexpect(expect(Promise.resolve(1)).rejects.toThrow()).rejects.toThrow('to reject');
  });

  it('matches objects partially', () => {
    expect({ id: 1, name: 'x', extra: true }).toMatchObject({ name: 'x' });
    expect({ a: { b: 3 } }).toHaveProperty('a.b', 3);
  });
});
