test('calls listeners with the arguments', () => {
  const e = createEmitter();
  const fn = vi.fn();
  e.on('save', fn);
  expect(e.emit('save', 1, 'two')).toBe(1);
  expect(fn).toHaveBeenCalledWith(1, 'two');
});
test('only listeners for that event', () => {
  const e = createEmitter();
  const fn = vi.fn();
  e.on('a', fn);
  expect(e.emit('b')).toBe(0);
  expect(fn).not.toHaveBeenCalled();
});
test('order of registration', () => {
  const e = createEmitter();
  const log = [];
  e.on('x', () => log.push(1));
  e.on('x', () => log.push(2));
  e.emit('x');
  expect(log).toEqual([1, 2]);
});
test('once runs one time', () => {
  const e = createEmitter();
  const fn = vi.fn();
  e.once('x', fn);
  e.emit('x', 'a');
  e.emit('x', 'b');
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith('a');
});
test('off and unsubscribe remove only that listener', () => {
  const e = createEmitter();
  const a = vi.fn();
  const b = vi.fn();
  const c = vi.fn();
  e.on('x', a);
  const unsubscribe = e.on('x', b);
  e.on('x', c);
  e.off('x', a);
  unsubscribe();
  e.emit('x');
  expect(a).not.toHaveBeenCalled();
  expect(b).not.toHaveBeenCalled();
  expect(c).toHaveBeenCalledTimes(1);
});
test('a once listener removing itself does not skip the next listener', () => {
  const e = createEmitter();
  const after = vi.fn();
  e.once('x', () => {});
  e.on('x', after);
  e.emit('x');
  expect(after).toHaveBeenCalledTimes(1);
});
