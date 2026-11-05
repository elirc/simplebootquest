test('describeError', () => {
  expect([0, 401, 403, 404, 429, 500, 503, 418].map((status) => describeError({ status }).title)).toEqual([
    'You are offline',
    'Please log in again',
    'You do not have access to this',
    'We could not find that',
    'Too many requests, slow down a little',
    'Our server had a problem',
    'Our server had a problem',
    'Something went wrong',
  ]);
  expect(describeError({ status: 404 }).canRetry).toBe(false);
  expect(describeError(new Error('x'))).toEqual({ title: 'Something went wrong', canRetry: true });
});
test('retryable errors show a button', () => {
  const onRetry = vi.fn();
  const el = render(<ErrorState error={{ status: 500 }} onRetry={onRetry} />);
  expect(el.props.role).toBe('alert');
  expect(text(find(el, 'h2'))).toBe('Our server had a problem');
  find(el, 'button').props.onClick();
  expect(onRetry).toHaveBeenCalled();
});
test('404 has no retry', () => expect(find(render(<ErrorState error={{ status: 404 }} onRetry={() => {}} />), 'button')).toBeUndefined());
test('401 links to login', () => {
  const el = render(<ErrorState error={{ status: 401 }} onRetry={() => {}} />);
  expect(find(el, 'a').props.href).toBe('/login');
  expect(find(el, 'button')).toBeUndefined();
});
