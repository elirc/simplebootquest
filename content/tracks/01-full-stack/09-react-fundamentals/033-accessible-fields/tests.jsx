test('links the label and input', () => {
  const el = render(<TextField id="email" label="Email" value="" onChange={() => {}} required />);
  expect(find(el, 'label').props.htmlFor).toBe('email');
  expect(text(find(el, 'label'))).toBe('Email *');
  const input = find(el, 'input');
  expect(input.props.id).toBe('email');
  expect(input.props.type).toBe('text');
  expect(input.props['aria-invalid']).toBe(false);
  expect(input.props['aria-describedby']).toBeUndefined();
});

test('errors are announced and described', () => {
  const el = render(<TextField id="email" label="Email" value="x" onChange={() => {}} error="Email is invalid" hint="We never share it" />);
  const input = find(el, 'input');
  expect(input.props['aria-invalid']).toBe(true);
  expect(input.props['aria-describedby']).toBe('email-error');
  const p = find(el, 'p');
  expect(p.props.role).toBe('alert');
  expect(p.props.id).toBe('email-error');
  expect(findAll(el, 'p')).toHaveLength(1);
});

test('hint when there is no error', () => {
  const el = render(<TextField id="pw" label="Password" type="password" value="" onChange={() => {}} hint="8+ characters" />);
  expect(find(el, 'input').props['aria-describedby']).toBe('pw-hint');
  expect(find(el, 'input').props.type).toBe('password');
  expect(text(find(el, 'p'))).toBe('8+ characters');
});

test('onChange passes the value', () => {
  const values = [];
  const el = render(<TextField id="n" label="Name" value="" onChange={(v) => values.push(v)} />);
  find(el, 'input').props.onChange({ target: { value: 'Ada' } });
  expect(values).toEqual(['Ada']);
});
