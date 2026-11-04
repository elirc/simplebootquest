const idle = { status: 'idle' };

test('start from idle shows a spinner', () => {
  const s = fetchReducer(idle, { type: 'start' });
  expect(s).toEqual({ status: 'loading' });
  expect(viewModel(s)).toEqual({ showSpinner: true, data: undefined, errorMessage: null });
});

test('resolve stores data and time', () => {
  const s = fetchReducer({ status: 'loading' }, { type: 'resolve', data: [1, 2], at: 1000 });
  expect(s).toEqual({ status: 'success', data: [1, 2], fetchedAt: 1000 });
  expect(viewModel(s)).toEqual({ showSpinner: false, data: [1, 2], errorMessage: null });
});

test('refetching keeps previous data visible', () => {
  const s = fetchReducer({ status: 'success', data: ['old'], fetchedAt: 1 }, { type: 'start' });
  expect(s).toEqual({ status: 'loading', previous: ['old'] });
  expect(viewModel(s)).toEqual({ showSpinner: false, data: ['old'], errorMessage: null });
});

test('errors keep previous data', () => {
  let s = fetchReducer({ status: 'success', data: ['old'], fetchedAt: 1 }, { type: 'start' });
  s = fetchReducer(s, { type: 'reject', error: 'Network down' });
  expect(s).toEqual({ status: 'error', error: 'Network down', previous: ['old'] });
  expect(viewModel(s)).toEqual({ showSpinner: false, data: ['old'], errorMessage: 'Network down' });
});

test('retrying after an error carries previous data', () => {
  const s = fetchReducer({ status: 'error', error: 'x', previous: ['old'] }, { type: 'start' });
  expect(s).toEqual({ status: 'loading', previous: ['old'] });
});

test('errors without previous data', () => {
  const s = fetchReducer({ status: 'loading' }, { type: 'reject', error: 'Boom' });
  expect(s).toEqual({ status: 'error', error: 'Boom' });
  expect(viewModel(s).data).toBeUndefined();
});

test('reset returns to idle', () => {
  expect(fetchReducer({ status: 'success', data: 1, fetchedAt: 1 }, { type: 'reset' })).toEqual({ status: 'idle' });
});
