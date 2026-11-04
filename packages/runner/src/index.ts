import { transform, type Transform } from 'sucrase';
import type { CodeLanguage } from '@sbq/shared';
import { AssertionError, deepEqual, expect } from './expect.js';
import { format } from './format.js';
import { Fragment, find, findAll, h, render, renderAll, text } from './jsx.js';

export { AssertionError, deepEqual, expect, format, Fragment, h, render, renderAll, text, find, findAll };

export interface RunRequest {
  language: CodeLanguage;
  /** The learner's code. */
  code: string;
  /** The quest's test file. Always JavaScript (JSX allowed for jsx quests). */
  tests: string;
  /** SQL executed before the learner's query (schema + seed data). */
  setup?: string;
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

/**
 * Run a learner's code against a quest's tests.
 *
 * The learner's code and the tests are evaluated in the same function scope,
 * so tests can call the learner's functions directly by name. This is NOT a
 * security sandbox: in the browser it runs inside a Web Worker that the page
 * terminates on timeout.
 */
export async function runQuest(req: RunRequest, options: RunOptions = {}): Promise<RunResult> {
  const started = Date.now();
  const logs: string[] = [];
  const results: TestResult[] = [];
  const registered: { name: string; fn: () => unknown }[] = [];
  const testTimeoutMs = options.testTimeoutMs ?? 2000;

  const finish = (error?: string): RunResult => ({
    passed: !error && results.length > 0 && results.every((r) => r.passed),
    results,
    logs,
    error,
    durationMs: Date.now() - started,
  });

  const test = (name: string, fn: () => unknown) => {
    registered.push({ name, fn });
  };
  const exportsObj: Record<string, unknown> = {};
  const helpers: Record<string, unknown> = {
    test,
    it: test,
    expect,
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
      program = `"use strict";\n{\n${transpile(req.tests, 'js', 'tests')}\n}`;
    } else {
      helpers.h = h;
      helpers.Fragment = Fragment;
      helpers.render = render;
      helpers.renderAll = renderAll;
      helpers.text = text;
      helpers.find = find;
      helpers.findAll = findAll;
      const user = transpile(req.code, req.language, 'your code');
      const tests = transpile(req.tests, req.language, 'tests');
      // Helpers arrive as function parameters. Running the code inside a
      // nested block lets learners declare their own `text`, `find`, etc.
      // without a "has already been declared" SyntaxError.
      program = `"use strict";\n{\n${user}\n;\n{\n${tests}\n}\n}`;
    }

    const names = Object.keys(helpers);
    const fn = new AsyncFunction(...names, program);
    await withTimeout(fn(...names.map((n) => helpers[n])), testTimeoutMs * 2);
  } catch (err) {
    sqlDb?.close();
    return finish(errorMessage(err));
  }

  for (const { name, fn } of registered) {
    const t0 = Date.now();
    try {
      await withTimeout(Promise.resolve().then(fn), testTimeoutMs);
      results.push({ name, passed: true, durationMs: Date.now() - t0 });
    } catch (err) {
      results.push({ name, passed: false, error: errorMessage(err), durationMs: Date.now() - t0 });
    }
  }
  sqlDb?.close();
  if (registered.length === 0) return finish('No tests were found for this quest.');
  return finish();
}

export { deepEqual as isDeepEqual };
