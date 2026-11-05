test('initials', () => {
  expect(initials('Ada Lovelace')).toBe('AL');
  expect(initials('grace brewster murray hopper')).toBe('GH');
  expect(initials('Linus')).toBe('L');
  expect(initials('   ')).toBe('?');
});
test('image when src is given', () => {
  const el = render(<Avatar name="Ada" src="/ada.png" size={40} />);
  expect(el.type).toBe('img');
  expect(el.props).toEqual({ src: '/ada.png', alt: 'Ada', width: 40, height: 40, className: 'avatar' });
});
test('fallback with initials', () => {
  const el = render(<Avatar name="Ada Lovelace" />);
  expect(el.type).toBe('span');
  expect(text(el)).toBe('AL');
  expect(el.props.role).toBe('img');
  expect(el.props['aria-label']).toBe('Ada Lovelace');
  expect(el.props.className).toBe('avatar avatar-fallback');
});
test('unknown user', () => {
  const el = render(<Avatar name="" />);
  expect(text(el)).toBe('?');
  expect(el.props['aria-label']).toBe('Unknown user');
});
test('default size', () => expect(render(<Avatar name="A" src="/a.png" />).props.width).toBe(32));
