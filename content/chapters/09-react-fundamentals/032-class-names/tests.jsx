test('cx handles every input type', () => {
  expect(cx('a', false, null, undefined, 0, '', 'b')).toBe('a b');
  expect(cx(['a', ['b', { c: true, d: false }]], { e: 1 })).toBe('a b c e');
  expect(cx('a', 'a b', ['b'])).toBe('a b');
  expect(cx()).toBe('');
});

test('Button classes', () => {
  expect(render(<Button>Save</Button>).props.className).toBe('btn btn-secondary');
  expect(render(<Button variant="primary" size="lg">Go</Button>).props.className).toBe('btn btn-primary btn-lg');
});

test('Button loading state', () => {
  const el = render(<Button variant="primary" loading>Save</Button>);
  expect(el.props.className).toBe('btn btn-primary is-loading');
  expect(el.props.disabled).toBe(true);
  expect(text(el)).toBe('Loading…');
  expect(render(<Button>Save</Button>).props.disabled).toBe(false);
});
