const todoSchema = {
  title: { type: 'string', required: true, minLength: 1, maxLength: 20 },
  priority: { type: 'string', enum: ['low', 'medium', 'high'], default: 'medium' },
  estimate: { type: 'number', min: 0, max: 100 },
  done: { type: 'boolean', default: false },
};

test('accepts valid data and applies defaults', () => {
  expect(validate(todoSchema, { title: ' Ship it ' })).toEqual({
    ok: true,
    value: { title: 'Ship it', priority: 'medium', done: false },
  });
});

test('keeps provided optional fields', () => {
  expect(validate(todoSchema, { title: 'x', estimate: 5, priority: 'high', done: true }).value).toEqual({
    title: 'x', priority: 'high', estimate: 5, done: true,
  });
});

test('requires required fields', () => {
  expect(validate(todoSchema, {})).toEqual({ ok: false, errors: { title: 'is required' } });
});

test('checks types', () => {
  expect(validate(todoSchema, { title: 42, estimate: '3' }).errors).toEqual({
    title: 'must be a string',
    estimate: 'must be a number',
  });
});

test('checks lengths after trimming', () => {
  expect(validate(todoSchema, { title: '   ' }).errors).toEqual({ title: 'must be at least 1 characters' });
  expect(validate(todoSchema, { title: 'a'.repeat(21) }).errors).toEqual({ title: 'must be at most 20 characters' });
});

test('checks number ranges', () => {
  expect(validate(todoSchema, { title: 'x', estimate: -1 }).errors).toEqual({ estimate: 'must be at least 0' });
  expect(validate(todoSchema, { title: 'x', estimate: 101 }).errors).toEqual({ estimate: 'must be at most 100' });
});

test('checks enums', () => {
  expect(validate(todoSchema, { title: 'x', priority: 'urgent' }).errors).toEqual({ priority: 'must be one of: low, medium, high' });
});

test('strips unknown fields (no mass assignment!)', () => {
  const result = validate(todoSchema, { title: 'x', isAdmin: true, id: 999 });
  expect(result.ok).toBe(true);
  expect('isAdmin' in result.value).toBe(false);
  expect('id' in result.value).toBe(false);
});
