test('calls listeners with arguments', () => {
  const e = new Emitter();
  const calls = [];
  e.on('greet', (a, b) => calls.push([a, b]));
  expect(e.emit('greet', 'Ada', 1)).toBe(true);
  expect(calls).toEqual([['Ada', 1]]);
});

test('emit returns false without listeners', () => {
  expect(new Emitter().emit('nothing')).toBe(false);
});

test('calls listeners in order', () => {
  const e = new Emitter();
  const order = [];
  e.on('x', () => order.push(1));
  e.on('x', () => order.push(2));
  e.emit('x');
  expect(order).toEqual([1, 2]);
});

test('on returns an unsubscribe function', () => {
  const e = new Emitter();
  let count = 0;
  const unsubscribe = e.on('x', () => count++);
  e.emit('x');
  unsubscribe();
  e.emit('x');
  expect(count).toBe(1);
  expect(e.listenerCount('x')).toBe(0);
});

test('off removes a listener', () => {
  const e = new Emitter();
  let count = 0;
  const fn = () => count++;
  e.on('x', fn);
  e.off('x', fn);
  e.emit('x');
  expect(count).toBe(0);
});

test('once only fires once', () => {
  const e = new Emitter();
  let count = 0;
  e.once('x', () => count++);
  e.emit('x');
  e.emit('x');
  expect(count).toBe(1);
  expect(e.listenerCount('x')).toBe(0);
});

test('unsubscribing during emit does not skip other listeners', () => {
  const e = new Emitter();
  const calls = [];
  e.once('x', () => calls.push('a'));
  e.on('x', () => calls.push('b'));
  e.emit('x');
  expect(calls).toEqual(['a', 'b']);
});
