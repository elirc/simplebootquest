test('describeError', () => {
  expect(describeError({ status: 401 })).toEqual({ title: 'Session expired', message: 'Please log in again.', retryable: false });
  expect(describeError({ status: 404 }).retryable).toBe(false);
  expect(describeError({ status: 503 }).title).toBe('Something went wrong');
  expect(describeError({ status: 0 }).retryable).toBe(true);
  expect(describeError(new TypeError('x is undefined'))).toEqual({ title: 'Unexpected error', message: 'x is undefined', retryable: true });
  expect(describeError(null).message).toBe('Unknown error');
});

test('ErrorPanel shows retry for server errors', () => {
  let retried = 0;
  const el = render(<ErrorPanel error={{ status: 500 }} onRetry={() => retried++} onLogin={() => {}} />);
  expect(el.props.role).toBe('alert');
  expect(text(find(el, 'h2'))).toBe('Something went wrong');
  const buttons = findAll(el, 'button');
  expect(buttons.map(text)).toEqual(['Try again']);
  buttons[0].props.onClick();
  expect(retried).toBe(1);
});

test('ErrorPanel offers login for 401', () => {
  const el = render(<ErrorPanel error={{ status: 401 }} onRetry={() => {}} onLogin={() => {}} />);
  expect(findAll(el, 'button').map(text)).toEqual(['Log in']);
});
