test('setState merges objects and functions', () => {
  const store = createStore({ count: 0, name: 'x' });
  store.setState({ name: 'y' });
  store.setState((s) => ({ count: s.count + 5 }));
  expect(store.getState()).toEqual({ count: 5, name: 'y' });
});

test('subscribers get state and previous state', () => {
  const store = createStore({ count: 0 });
  const calls = [];
  store.subscribe((s, prev) => calls.push([prev.count, s.count]));
  store.setState({ count: 1 });
  expect(calls).toEqual([[0, 1]]);
});

test('no notification when nothing changed', () => {
  const store = createStore({ count: 0 });
  let calls = 0;
  store.subscribe(() => calls++);
  store.setState({ count: 0 });
  expect(calls).toBe(0);
});

test('unsubscribe', () => {
  const store = createStore({ count: 0 });
  let calls = 0;
  const off = store.subscribe(() => calls++);
  off();
  store.setState({ count: 1 });
  expect(calls).toBe(0);
});

test('select only fires when the derived value changes', () => {
  const store = createStore({ todos: [], filter: 'all' });
  const seen = [];
  store.select((s) => s.todos.length, (n) => seen.push(n));
  store.setState({ filter: 'done' });
  store.setState((s) => ({ todos: [...s.todos, 'a'] }));
  store.setState({ filter: 'all' });
  expect(seen).toEqual([1]);
});
