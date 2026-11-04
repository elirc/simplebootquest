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

function currentData<T>(state: FetchState<T>): T | undefined {
  if (state.status === 'success') return state.data;
  if (state.status === 'loading' || state.status === 'error') return state.previous;
  return undefined;
}

export function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case 'start': {
      const previous = currentData(state);
      return previous === undefined ? { status: 'loading' } : { status: 'loading', previous };
    }
    case 'resolve':
      return { status: 'success', data: action.data, fetchedAt: action.at };
    case 'reject': {
      const previous = currentData(state);
      return previous === undefined ? { status: 'error', error: action.error } : { status: 'error', error: action.error, previous };
    }
    case 'reset':
      return { status: 'idle' };
    default:
      return state;
  }
}

export function viewModel<T>(state: FetchState<T>) {
  const data = currentData(state);
  return {
    showSpinner: state.status === 'loading' && data === undefined,
    data,
    errorMessage: state.status === 'error' ? state.error : null,
  };
}
