type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading'; previous?: T }
  | { status: 'success'; data: T; fetchedAt: number }
  | { status: 'error'; error: string; previous?: T };

type FetchAction<T> =
  | { type: 'start' }
  | { type: 'resolve'; data: T; at: number }
  | { type: 'reject'; error: string }
  | { type: 'reset' };

export function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  // TODO
  return state;
}

export function viewModel<T>(state: FetchState<T>) {
  // TODO
  return { showSpinner: false, data: undefined as T | undefined, errorMessage: null as string | null };
}
