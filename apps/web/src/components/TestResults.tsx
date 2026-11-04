import type { RunResult } from '@sbq/runner';

export function TestResults({ result }: { result: RunResult }) {
  const passed = result.results.filter((r) => r.passed).length;
  return (
    <div className="results" aria-live="polite">
      <div className={`results-summary ${result.passed ? 'ok' : 'fail'}`}>
        {result.passed ? '✓ All tests passed!' : result.error ? '✖ Your code could not run' : `✖ ${passed}/${result.results.length} tests passed`}
        <span className="muted"> · {result.durationMs}ms</span>
      </div>
      {result.error && <pre className="results-error">{result.error}</pre>}
      {result.results.length > 0 && (
        <ul className="results-list">
          {result.results.map((t, i) => (
            <li key={i} className={t.passed ? 'ok' : 'fail'}>
              <span aria-hidden="true">{t.passed ? '✓' : '✖'}</span>
              <div>
                <span>{t.name}</span>
                {t.error && <pre>{t.error}</pre>}
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
