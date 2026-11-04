test('Greeting renders an h1', () => {
  const el = render(<Greeting name="Ada" />);
  expect(el.type).toBe('h1');
  expect(el.props.className).toBe('greeting');
  expect(text(el)).toBe('Hello, Ada!');
});

test('Greeting has a default', () => {
  expect(text(render(<Greeting />))).toBe('Hello, stranger!');
});

test('Card renders title and children', () => {
  const el = render(<Card title="Profile"><p>Body</p></Card>);
  expect(el.type).toBe('section');
  expect(el.props.className).toBe('card');
  expect(el.children[0].type).toBe('h2');
  expect(text(el.children[0])).toBe('Profile');
  expect(find(el, 'p')).toBeDefined();
  expect(find(el, 'footer')).toBeUndefined();
});

test('Card renders an optional footer last', () => {
  const el = render(<Card title="T" footer="Bye"><p>Body</p></Card>);
  const last = el.children[el.children.length - 1];
  expect(last.type).toBe('footer');
  expect(text(last)).toBe('Bye');
});

test('UserBadge composes Card', () => {
  const el = render(<UserBadge user={{ name: 'Grace', email: 'grace@navy.mil', isAdmin: true }} />);
  expect(text(find(el, 'h2'))).toBe('Grace');
  expect(text(find(el, 'p'))).toBe('grace@navy.mil');
  expect(text(find(el, 'footer'))).toBe('Admin');
});

test('UserBadge has no footer for regular users', () => {
  const el = render(<UserBadge user={{ name: 'Linus', email: 'l@k.org', isAdmin: false }} />);
  expect(find(el, 'footer')).toBeUndefined();
});
