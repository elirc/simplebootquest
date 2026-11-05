const TODO = {
  title: { type: 'string', required: true, maxLength: 10 },
  done: { type: 'boolean' },
  priority: { type: 'number', min: 1, max: 5 },
};
test('valid input, trimmed and stripped', () => {
  expect(validate(TODO, { title: '  Milk ', done: false, isAdmin: true })).toEqual({ ok: true, data: { title: 'Milk', done: false } });
});
test('not an object', () => {
  expect(validate(TODO, null)).toEqual({ ok: false, errors: [{ path: '', message: 'Expected an object' }] });
  expect(validate(TODO, [1])).toEqual({ ok: false, errors: [{ path: '', message: 'Expected an object' }] });
});
test('required', () => {
  expect(validate(TODO, {}).errors).toEqual([{ path: 'title', message: 'Required' }]);
  expect(validate(TODO, { title: '   ' }).errors).toEqual([{ path: 'title', message: 'Required' }]);
});
test('types', () => {
  expect(validate(TODO, { title: null, done: 'yes', priority: NaN }).errors).toEqual([
    { path: 'title', message: 'Expected string' },
    { path: 'done', message: 'Expected boolean' },
    { path: 'priority', message: 'Expected number' },
  ]);
});
test('limits', () => {
  expect(validate(TODO, { title: 'x'.repeat(11), priority: 0 }).errors).toEqual([
    { path: 'title', message: 'Must be at most 10 characters' },
    { path: 'priority', message: 'Must be at least 1' },
  ]);
  expect(validate(TODO, { title: 'ok', priority: 6 }).errors).toEqual([{ path: 'priority', message: 'Must be at most 5' }]);
});
