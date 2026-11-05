import { transform, type Transform } from 'sucrase';
import type { CodeLanguage } from '@sbq/shared';
import { AssertionError, deepEqual, expect } from './expect.js';
import { format } from './format.js';
import { Fragment, find, findAll, h, render, renderAll, text } from './jsx.js';
import { fn } from './mock.js';

export { AssertionError, deepEqual, expect, format, Fragment, h, render, renderAll, text, find, findAll, fn };

export interface RunRequest {
  language: CodeLanguage;
  /** The learner's code. */
  code: string;
  /** The quest's test file. Always JavaScript (JSX allowed for jsx quests). */
  tests: string;
  /** SQL executed before the learner's query (schema + seed data). */
  setup?: string;
  /**
   * "Write the tests" quests: `code` is the learner's TEST file, `subject` is
   * the correct implementation, and each mutant is a deliberately buggy copy.
   * The learner's tests must pass against the subject and fail against every mutant.
   */
  subject?: string;
  mutants?: Mutant[];
}

export interface Mutant {
  /** A short description of the bug, e.g. "off-by-one at the upper boundary". */
  name: string;
  code: string;
}

export interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  durationMs: number;
}

export interface RunResult {
  /** True when the code ran and every test passed. */
  passed: boolean;
  results: TestResult[];
  logs: string[];
  /** A compile or top-level runtime error, if the code never got to the tests. */
  error?: string;
  durationMs: number;
}

/** The subset of sql.js we use, so this package doesn't depend on its types at runtime. */
export interface SqlJsLike {
  Database: new () => SqlDatabaseLike;
}
export interface SqlDatabaseLike {
  exec(sql: string): { columns: string[]; values: unknown[][] }[];
  close(): void;
}

export interface RunOptions {
  /** Required for SQL quests. In the browser this loads the wasm build. */
  loadSql?: () => Promise<SqlJsLike>;
  /** Per-test timeout for async tests (ms). */
  testTimeoutMs?: number;
}

const MAX_LOG_LINES = 200;

const TRANSFORMS: Record<Exclude<CodeLanguage, 'sql'>, Transform[]> = {
  js: ['imports'],
  ts: ['typescript', 'imports'],
  jsx: ['jsx', 'typescript', 'imports'],
};

export function transpile(source: string, language: Exclude<CodeLanguage, 'sql'>, filename = 'solution'): string {
  try {
    return transform(source, {
      transforms: TRANSFORMS[language],
      jsxPragma: 'h',
      jsxFragmentPragma: 'Fragment',
      production: true,
      filePath: filename,
    }).code;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new SyntaxError(`${filename}: ${message}`);
  }
}

function rowsFrom(results: { columns: string[]; values: unknown[][] }[]): Record<string, unknown>[] {
  const last = results[results.length - 1];
  if (!last) return [];
  return last.values.map((row) => Object.fromEntries(last.columns.map((col, i) => [col, row[i]])));
}

function createConsole(logs: string[]) {
  const push =
    (prefix: string) =>
    (...args: unknown[]) => {
      if (logs.length >= MAX_LOG_LINES) return;
      logs.push(prefix + args.map((a) => (typeof a === 'string' ? a : format(a))).join(' '));
      if (logs.length === MAX_LOG_LINES) logs.push('… output truncated');
    };
  return { log: push(''), info: push(''), debug: push(''), warn: push('⚠ '), error: push('✖ '), table: push('') };
}

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
  ...args: string[]
) => (...args: unknown[]) => Promise<unknown>;

function errorMessage(err: unknown): string {
  if (err instanceof AssertionError) return err.message;
  if (err instanceof Error) return `${err.name}: ${err.message}`;
  return `Thrown: ${format(err)}`;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Test timed out after ${ms}ms (did you forget to resolve a promise?)`)), ms);
    promise.then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
    );
  });
}

interface Suite {
  name: string;
  parent: Suite | null;
  before: (() => unknown)[];
  after: (() => unknown)[];
}

/**
 * Run one implementation against one test file.
 *
 * The code and the tests are evaluated in the same function scope, so tests
 * can call the implementation's functions directly by name. This is NOT a
 * security sandbox: in the browser it runs inside a Web Worker that the page
 * terminates on timeout.
 */
async function runSuite(req: RunRequest, options: RunOptions, testsLabel = 'tests', codeLabel = 'your code'): Promise<RunResult> {
  const started = Date.now();
  const logs: string[] = [];
  const results: TestResult[] = [];
  const registered: { name: string; fn: () => unknown; suite: Suite }[] = [];
  const testTimeoutMs = options.testTimeoutMs ?? 2000;

  const finish = (error?: string): RunResult => ({
    passed: !error && results.length > 0 && results.every((r) => r.passed),
    results,
    logs,
    error,
    durationMs: Date.now() - started,
  });

  // Minimal describe/beforeEach/afterEach, mirroring Vitest's semantics.
  const root: Suite = { name: '', parent: null, before: [], after: [] };
  let current = root;
  const chain = (suite: Suite) => {
    const out: Suite[] = [];
    for (let s: Suite | null = suite; s; s = s.parent) out.unshift(s);
    return out;
  };
  const test = (name: string, testFn: () => unknown) => {
    const prefix = chain(current).map((s) => s.name).filter(Boolean);
    registered.push({ name: [...prefix, name].join(' > '), fn: testFn, suite: current });
  };
  const describe = (name: string, body: () => void) => {
    const suite: Suite = { name, parent: current, before: [], after: [] };
    const previous = current;
    current = suite;
    try {
      body();
    } finally {
      current = previous;
    }
  };

  const exportsObj: Record<string, unknown> = {};
  const helpers: Record<string, unknown> = {
    test,
    it: test,
    describe,
    beforeEach: (hook: () => unknown) => current.before.push(hook),
    afterEach: (hook: () => unknown) => current.after.push(hook),
    expect,
    vi: { fn },
    console: createConsole(logs),
    exports: exportsObj,
    module: { exports: exportsObj },
    require: (name: string) => {
      throw new Error(`Imports aren't available in the browser runner (tried to import "${name}"). Everything you need is already in scope.`);
    },
    sleep: (ms: number) => new Promise((r) => setTimeout(r, ms)),
  };

  let program: string;
  let sqlDb: SqlDatabaseLike | undefined;

  try {
    if (req.language === 'sql') {
      if (!options.loadSql) return finish('SQL runner is not available.');
      const SQL = await options.loadSql();
      sqlDb = new SQL.Database();
      const db = sqlDb;
      if (req.setup) db.exec(req.setup);
      let resultRows: Record<string, unknown>[] = [];
      try {
        if (!req.code.trim()) return finish('Write some SQL first!');
        resultRows = rowsFrom(db.exec(req.code));
      } catch (err) {
        return finish(`SQL error: ${err instanceof Error ? err.message : String(err)}`);
      }
      helpers.db = db;
      helpers.result = resultRows;
      helpers.query = (sql: string) => rowsFrom(db.exec(sql));
      // The learner's SQL text, so tests can check that a technique was used.
      helpers.code = req.code;
      program = `"use strict";\n{\n${transpile(req.tests, 'js', testsLabel)}\n}`;
    } else {
      helpers.h = h;
      helpers.Fragment = Fragment;
      helpers.render = render;
      helpers.renderAll = renderAll;
      helpers.text = text;
      helpers.find = find;
      helpers.findAll = findAll;
      const user = transpile(req.code, req.language, codeLabel);
      const tests = transpile(req.tests, req.language, testsLabel);
      // Helpers arrive as function parameters. Running the code inside a
      // nested block lets learners declare their own `text`, `find`, etc.
      // without a "has already been declared" SyntaxError.
      program = `"use strict";\n{\n${user}\n;\n{\n${tests}\n}\n}`;
    }

    const names = Object.keys(helpers);
    const compiled = new AsyncFunction(...names, program);
    await withTimeout(compiled(...names.map((n) => helpers[n])), testTimeoutMs * 2);
  } catch (err) {
    sqlDb?.close();
    return finish(errorMessage(err));
  }

  for (const { name, fn: testFn, suite } of registered) {
    const t0 = Date.now();
    const suites = chain(suite);
    let error: unknown = null;
    try {
      for (const s of suites) for (const hook of s.before) await withTimeout(Promise.resolve().then(hook), testTimeoutMs);
      await withTimeout(Promise.resolve().then(testFn), testTimeoutMs);
    } catch (err) {
      error = err;
    }
    for (const s of [...suites].reverse()) {
      for (const hook of s.after) {
        try {
          await withTimeout(Promise.resolve().then(hook), testTimeoutMs);
        } catch (err) {
          error ??= err;
        }
      }
    }
    results.push(error === null ? { name, passed: true, durationMs: Date.now() - t0 } : { name, passed: false, error: errorMessage(error), durationMs: Date.now() - t0 });
  }
  sqlDb?.close();
  if (registered.length === 0) return finish('No tests were found. Write some with test(...) or it(...).');
  return finish();
}

/**
 * "Write the tests" quests are graded by mutation testing: the learner's
 * tests must pass against the correct implementation AND fail against each
 * deliberately buggy mutant. A suite that can't tell them apart isn't testing.
 */
async function runWriteTests(req: RunRequest, options: RunOptions): Promise<RunResult> {
  const started = Date.now();
  const learnerTests = req.code;
  const base = { language: req.language, setup: req.setup };

  const onSubject = await runSuite({ ...base, code: req.subject!, tests: learnerTests }, options, 'your tests', 'the code under test');
  if (onSubject.error) return { ...onSubject, durationMs: Date.now() - started };

  const results: TestResult[] = [];
  const failing = onSubject.results.filter((r) => !r.passed);
  results.push({
    name: `Your ${onSubject.results.length} test(s) pass against the correct implementation`,
    passed: failing.length === 0,
    error: failing.length
      ? `These tests fail even though the code is correct, so the test is wrong:\n${failing.map((r) => `• ${r.name}: ${r.error}`).join('\n')}`
      : undefined,
    durationMs: onSubject.durationMs,
  });

  for (const mutant of req.mutants ?? []) {
    const run = await runSuite({ ...base, code: mutant.code, tests: learnerTests }, options, 'your tests', 'the code under test');
    const caught = !run.passed;
    results.push({
      name: `Catches the bug: ${mutant.name}`,
      passed: caught,
      error: caught ? undefined : 'All your tests still pass with this bug in the code. Add a test that would fail.',
      durationMs: run.durationMs,
    });
  }

  return {
    passed: results.every((r) => r.passed),
    results,
    logs: onSubject.logs,
    durationMs: Date.now() - started,
  };
}

export async function runQuest(req: RunRequest, options: RunOptions = {}): Promise<RunResult> {
  return req.subject !== undefined ? runWriteTests(req, options) : runSuite(req, options);
}

export { deepEqual as isDeepEqual };
