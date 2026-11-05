test('label is linked to the input', () => {
  const el = render(<Field id="email" label="Email" value="" onChange={() => {}} />);
  expect(find(el, 'label').props.htmlFor).toBe('email');
  expect(find(el, 'input').props.id).toBe('email');
  expect(find(el, 'input').props.type).toBe('text');
});
test('no hint or error', () => {
  const input = find(render(<Field id="name" label="Name" value="" onChange={() => {}} />), 'input');
  expect(input.props['aria-invalid']).toBeUndefined();
  expect(input.props['aria-describedby']).toBeUndefined();
});
test('hint and error are described', () => {
  const el = render(<Field id="email" label="Email" type="email" value="x" onChange={() => {}} hint="We never share it" error="Enter a valid email" />);
  const input = find(el, 'input');
  expect(input.props['aria-invalid']).toBe(true);
  expect(input.props['aria-describedby']).toBe('email-hint email-error');
  expect(text(find(el, (n) => n.props.id === 'email-hint'))).toBe('We never share it');
  const err = find(el, (n) => n.props.id === 'email-error');
  expect(err.props.role).toBe('alert');
  expect(text(err)).toBe('Enter a valid email');
});
test('error only', () => {
  const input = find(render(<Field id="pw" label="Password" value="" onChange={() => {}} error="Too short" />), 'input');
  expect(input.props['aria-describedby']).toBe('pw-error');
});
test('required marker', () => {
  const el = render(<Field id="t" label="Title" value="" onChange={() => {}} required />);
  expect(text(find(el, 'label'))).toBe('Title *');
  expect(find(el, (n) => n.props['aria-hidden'] === 'true')).toBeDefined();
  expect(find(el, 'input').props.required).toBe(true);
});
test('onChange receives the value', () => {
  const onChange = vi.fn();
  find(render(<Field id="t" label="T" value="" onChange={onChange} />), 'input').props.onChange({ target: { value: 'hello' } });
  expect(onChange).toHaveBeenCalledWith('hello');
});
