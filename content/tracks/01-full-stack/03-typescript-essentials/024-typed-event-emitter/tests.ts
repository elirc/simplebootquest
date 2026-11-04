test('on and emit', () => {
  const bus = new TypedEmitter();
  const seen = [];
  bus.on('login', (e) => seen.push(e.userId));
  expect(bus.emit('login', { userId: 'u1' })).toBe(1);
  expect(seen).toEqual(['u1']);
  expect(bus.emit('nothing', null)).toBe(0);
});

test('unsubscribe and once', () => {
  const bus = new TypedEmitter();
  let a = 0;
  let b = 0;
  const off = bus.on('tick', () => a++);
  bus.once('tick', () => b++);
  bus.emit('tick', undefined);
  off();
  bus.emit('tick', undefined);
  expect([a, b]).toEqual([1, 1]);
});

test('clear', () => {
  const bus = new TypedEmitter();
  let n = 0;
  bus.on('a', () => n++);
  bus.on('b', () => n++);
  bus.clear('a');
  bus.emit('a', 1);
  bus.emit('b', 1);
  expect(n).toBe(1);
  bus.clear();
  bus.emit('b', 1);
  expect(n).toBe(1);
});
