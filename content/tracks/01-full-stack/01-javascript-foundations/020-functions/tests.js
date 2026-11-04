test('greets with the default greeting', () => {
  expect(greet('Ada')).toBe('Hello, Ada!');
});

test('greets with a custom greeting', () => {
  expect(greet('Linus', 'Hey')).toBe('Hey, Linus!');
});

test('counter counts up from 1', () => {
  const next = makeCounter();
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(3);
});

test('counters are independent', () => {
  const a = makeCounter();
  const b = makeCounter();
  a();
  a();
  expect(b()).toBe(1);
  expect(a()).toBe(3);
});
