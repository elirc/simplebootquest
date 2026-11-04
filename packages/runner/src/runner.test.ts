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
