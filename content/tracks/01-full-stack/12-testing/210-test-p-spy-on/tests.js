function makeCalc() {
  return { factor: 10, scale(x) { return x * this.factor; } };
}
test('calls through and records calls', () => {
  const calc = makeCalc();
  const spy = spyOn(calc, 'scale');
  expect(calc.scale(2)).toBe(20);
  expect(calc.scale(3)).toBe(30);
  expect(spy.calls).toEqual([[2], [3]]);
});
test('mockReturnValue', () => {
  const calc = makeCalc();
  spyOn(calc, 'scale').mockReturnValue(99);
  expect(calc.scale(2)).toBe(99);
});
test('mockImplementation', () => {
  const calc = makeCalc();
  const spy = spyOn(calc, 'scale').mockImplementation((x) => -x);
  expect(calc.scale(5)).toBe(-5);
  expect(spy.calls).toEqual([[5]]);
});
test('restore puts the original back', () => {
  const calc = makeCalc();
  const original = calc.scale;
  const spy = spyOn(calc, 'scale').mockReturnValue(0);
  spy.restore();
  expect(calc.scale === original).toBe(true);
  expect(calc.scale(1)).toBe(10);
});
test('spying on console-like objects', () => {
  const logger = { lines: [], log(msg) { this.lines.push(msg); } };
  const spy = spyOn(logger, 'log');
  logger.log('hello');
  expect(logger.lines).toEqual(['hello']);
  expect(spy.calls).toEqual([['hello']]);
});
test('non-functions throw', () => expect(() => spyOn({ x: 1 }, 'x')).toThrow('x is not a function'));
