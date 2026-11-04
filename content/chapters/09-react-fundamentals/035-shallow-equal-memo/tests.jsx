test('shallowEqual', () => {
  const fn = () => {};
  expect(shallowEqual({ a: 1, f: fn }, { a: 1, f: fn })).toBe(true);
  expect(shallowEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  expect(shallowEqual({ a: {} }, { a: {} })).toBe(false);
  expect(shallowEqual({ n: NaN }, { n: NaN })).toBe(true);
});

test('memo skips renders for equal props', () => {
  const Row = memo(({ label }) => <li>{label}</li>);
  const first = Row({ label: 'a' });
  const second = Row({ label: 'a' });
  expect(second).toBe(first);
  expect(Row.renders).toBe(1);
  Row({ label: 'b' });
  expect(Row.renders).toBe(2);
});

test('new function props defeat memo', () => {
  const Row = memo(({ onClick }) => <button onClick={onClick}>x</button>);
  Row({ onClick: () => {} });
  Row({ onClick: () => {} });
  expect(Row.renders).toBe(2);
  const stable = () => {};
  Row({ onClick: stable });
  Row({ onClick: stable });
  expect(Row.renders).toBe(3);
});
