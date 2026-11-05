import type { RunResult } from '@sbq/runner';

/**
 * Plain-English explanations for the errors beginners hit most. The first
 * red test is the scariest moment for a new learner; a hint that says what
 * the error usually *means* turns it into a learning moment.
 */
const EXPLANATIONS: { pattern: RegExp; tip: string }[] = [
  { pattern: /ReferenceError: (\w+) is not defined/, tip: 'You used a name that doesn\'t exist here. Check the spelling (names are case-sensitive), and that it is declared before use and exported with the expected name.' },
  { pattern: /TypeError: .* is not a function/, tip: 'Something you called isn\'t a function. Often a typo in a method name, calling a value that is undefined, or forgetting to return a function.' },
  { pattern: /TypeError: Cannot read properties of (undefined|null)/, tip: 'You tried to read a property of undefined or null. Log the value just before that line: is a function missing a return, or is data not loaded yet?' },
  { pattern: /Expected undefined to (be|equal)/, tip: 'Your function returned undefined. Did you forget a `return` statement (or return from inside a callback instead of the function)?' },
  { pattern: /Assignment to constant variable/, tip: 'You reassigned a `const`. Use `let` if the value really needs to change, or create a new value instead of mutating.' },
  { pattern: /SyntaxError/, tip: 'The code can\'t be parsed. Look for a missing bracket, quote or comma near the line mentioned. The editor highlighting usually shows where it goes wrong.' },
  { pattern: /is not iterable/, tip: 'You used for...of, spread (...) or destructuring on something that isn\'t an array or iterable. Check what the value actually is.' },
  { pattern: /Maximum call stack size exceeded/, tip: 'Infinite recursion: a function keeps calling itself. Check that your recursive function has a base case that stops it.' },
  { pattern: /timed out|took longer than/i, tip: 'The code never finished. Look for a loop whose condition never becomes false, or a promise that is never resolved.' },
  { pattern: /SQL error: no such column/, tip: 'A column name doesn\'t exist. Check the table definitions in the setup, and alias tables consistently (e.g. `b.title`).' },
  { pattern: /SQL error: no such table/, tip: 'That table doesn\'t exist. Check the spelling against the setup SQL.' },
  { pattern: /Too many re-renders/, tip: 'A state update keeps triggering another render. Usually a useEffect without a dependency array that sets state, or calling setState during render.' },
  { pattern: /never sent a response/, tip: 'A route handler finished without calling res.json(), res.send() or next(). Every code path in a handler must respond, or pass control on.' },
];

export function explainError(message: string): string | null {
  return EXPLANATIONS.find((e) => e.pattern.test(message))?.tip ?? null;
}

function Explanation({ message }: { message?: string }) {
  const tip = message ? explainError(message) : null;
  return tip ? <p className="error-tip">💡 {tip}</p> : null;
}

export function TestResults({ result }: { result: RunResult }) {
  const passed = result.results.filter((r) => r.passed).length;
  return (
    <div className="results" aria-live="polite">
      <div className={`results-summary ${result.passed ? 'ok' : 'fail'}`}>
        {result.passed ? '✓ All tests passed!' : result.error ? '✖ Your code could not run' : `✖ ${passed}/${result.results.length} tests passed`}
        <span className="muted"> · {result.durationMs}ms</span>
      </div>
      {result.error && (
        <>
          <pre className="results-error">{result.error}</pre>
          <Explanation message={result.error} />
        </>
      )}
      {result.results.length > 0 && (
        <ul className="results-list">
          {result.results.map((t, i) => (
            <li key={i} className={t.passed ? 'ok' : 'fail'}>
              <span aria-hidden="true">{t.passed ? '✓' : '✖'}</span>
              <div>
                <span>{t.name}</span>
                {t.error && <pre>{t.error}</pre>}
                <Explanation message={t.error} />
              </div>
            </li>
          ))}
        </ul>
      )}
      {result.logs.length > 0 && (
        <details open className="console">
          <summary>Console output</summary>
          <pre>{result.logs.join('\n')}</pre>
        </details>
      )}
    </div>
  );
}
