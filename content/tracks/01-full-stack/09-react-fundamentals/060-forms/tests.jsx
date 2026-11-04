const valid = { name: 'Ada', email: 'ada@example.com', password: 'analytical', confirmPassword: 'analytical' };

test('valid values have no errors', () => {
  expect(validateSignup(valid)).toEqual({});
});

test('reports every invalid field', () => {
  expect(validateSignup({ name: ' ', email: '', password: 'short', confirmPassword: 'nope' })).toEqual({
    name: 'Name is required',
    email: 'Email is required',
    password: 'Password must be at least 8 characters',
    confirmPassword: 'Passwords do not match',
  });
});

test('checks the email format', () => {
  for (const email of ['ada', 'ada@', 'ada@example', '@example.com', 'a da@example.com']) {
    expect(validateSignup({ ...valid, email }).email).toBe('Email is invalid');
  }
});

test('FieldError only shows touched errors', () => {
  expect(renderAll(<FieldError error="Bad" touched={false} />)).toEqual([]);
  expect(renderAll(<FieldError error={undefined} touched={true} />)).toEqual([]);
  const el = render(<FieldError error="Bad" touched={true} />);
  expect(el.type).toBe('p');
  expect(el.props.role).toBe('alert');
  expect(text(el)).toBe('Bad');
});

test('SubmitButton reflects state', () => {
  const idle = render(<SubmitButton submitting={false} disabled={false} />);
  expect(idle.props.type).toBe('submit');
  expect(idle.props.disabled).toBe(false);
  expect(text(idle)).toBe('Sign up');
  const busy = render(<SubmitButton submitting={true} disabled={false} />);
  expect(busy.props.disabled).toBe(true);
  expect(text(busy)).toBe('Saving…');
  expect(render(<SubmitButton submitting={false} disabled={true} />).props.disabled).toBe(true);
});
