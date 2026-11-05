test('submit and success', () => {
  const s1 = submitReducer(initialSubmit, { type: 'submit' });
  expect(s1).toEqual({ status: 'submitting', fieldErrors: {}, error: null });
  expect(canSubmit(s1)).toBe(false);
  expect(submitReducer(s1, { type: 'submit' }) === s1).toBe(true);
  expect(submitReducer(s1, { type: 'success' }).status).toBe('success');
});
test('validation errors map to fields', () => {
  const s = submitReducer({ status: 'submitting', fieldErrors: {}, error: null }, {
    type: 'failure',
    status: 400,
    body: { error: { issues: [{ path: 'email', message: 'Invalid email' }, { path: 'email', message: 'Too long' }, { path: 'name', message: 'Required' }] } },
  });
  expect(s).toEqual({ status: 'error', fieldErrors: { email: 'Invalid email', name: 'Required' }, error: 'Please fix the highlighted fields' });
  expect(canSubmit(s)).toBe(true);
});
test('other failures', () => {
  const sub = { status: 'submitting', fieldErrors: {}, error: null };
  expect(submitReducer(sub, { type: 'failure', status: 0 }).error).toBe('You appear to be offline');
  expect(submitReducer(sub, { type: 'failure', status: 409, body: { error: { message: 'Email taken' } } }).error).toBe('Email taken');
  expect(submitReducer(sub, { type: 'failure', status: 500, body: null }).error).toBe('Something went wrong');
});
test('editing clears that field error', () => {
  const s = { status: 'error', fieldErrors: { email: 'Invalid', name: 'Required' }, error: 'Please fix the highlighted fields' };
  expect(submitReducer(s, { type: 'edit', field: 'email' }).fieldErrors).toEqual({ name: 'Required' });
  expect(submitReducer(s, { type: 'edit', field: 'other' }) === s).toBe(true);
});
test('resubmitting clears errors', () => {
  const s = { status: 'error', fieldErrors: { a: 'x' }, error: 'e' };
  expect(submitReducer(s, { type: 'submit' })).toEqual({ status: 'submitting', fieldErrors: {}, error: null });
});
