import { useCallback, useEffect, useState } from 'react';

export type AsyncState<T> =
  | { status: 'loading'; data?: T }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error; data?: T };

/**
 * Minimal data-fetching hook: loading / success / error as a discriminated
 * union, previous data kept while reloading, and stale responses ignored.
 * (Chapter 10 of the curriculum builds exactly this.)
 */
export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let ignore = false;
    setState((s) => ({ status: 'loading', data: s.data }));
    fn().then(
      (data) => !ignore && setState({ status: 'success', data }),
      (error: Error) => !ignore && setState((s) => ({ status: 'error', error, data: s.data })),
    );
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, version]);

  const reload = useCallback(() => setVersion((v) => v + 1), []);
  const setData = useCallback((updater: (data: T) => T) => {
    setState((s) => (s.data === undefined ? s : { status: 'success', data: updater(s.data) }));
  }, []);
  return { state, reload, setData };
}
