const validate = (v) => {
  const e = {};
  if (!v.email.includes('@')) e.email = 'Email is invalid';
  if (v.password.length < 8) e.password = 'Too short';
  return e;
};

test('initial state', () => {
  expect(initialFormState({ email: '' })).toEqual({ values: { email: '' }, touched: {}, errors: {}, submitting: false, submitCount: 0 });
});

test('errors are hidden until blur', () => {
  let s = initialFormState({ email: '', password: '' });
  s = formReducer(s, { type: 'change', field: 'email', value: 'ada', validate });
  expect(s.values.email).toBe('ada');
  expect(s.errors.email).toBe('Email is invalid');
  expect(visibleError(s, 'email')).toBeUndefined();
  s = formReducer(s, { type: 'blur', field: 'email' });
  expect(visibleError(s, 'email')).toBe('Email is invalid');
  expect(visibleError(s, 'password')).toBeUndefined();
});

test('submit with errors shows everything and does not submit', () => {
  let s = initialFormState({ email: '', password: '' });
  s = formReducer(s, { type: 'submit', validate });
  expect(s.submitting).toBe(false);
  expect(s.submitCount).toBe(1);
  expect(s.touched).toEqual({ email: true, password: true });
  expect(visibleError(s, 'password')).toBe('Too short');
});

test('valid submit, server errors, then success', () => {
  let s = initialFormState({ email: 'a@b.co', password: 'longenough' });
  s = formReducer(s, { type: 'submit', validate });
  expect(s.submitting).toBe(true);
  s = formReducer(s, { type: 'serverErrors', errors: { email: 'Already registered' } });
  expect(s.submitting).toBe(false);
  expect(visibleError(s, 'email')).toBe('Already registered');
  s = formReducer(s, { type: 'success' });
  expect(s).toEqual(initialFormState({ email: 'a@b.co', password: 'longenough' }));
});
