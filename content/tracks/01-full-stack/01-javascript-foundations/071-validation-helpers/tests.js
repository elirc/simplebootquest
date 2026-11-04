const schema = {
  username: [required(), minLength(3), maxLength(12)],
  email: [required(), matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'must be a valid email')],
};

test('rules return messages or null', () => {
  expect(required()('')).toBe('is required');
  expect(required()('x')).toBeNull();
  expect(minLength(3)('ab')).toBe('must be at least 3 characters');
  expect(maxLength(2)('abc')).toBe('must be at most 2 characters');
});

test('validateField returns the first error', () => {
  expect(validateField('', schema.username)).toBe('is required');
  expect(validateField('ab', schema.username)).toBe('must be at least 3 characters');
  expect(validateField('ada', schema.username)).toBeNull();
});

test('validateForm', () => {
  expect(validateForm({ username: 'ab', email: 'nope' }, schema)).toEqual({
    username: 'must be at least 3 characters',
    email: 'must be a valid email',
  });
  expect(validateForm({ username: 'ada', email: 'ada@example.com' }, schema)).toEqual({});
  expect(validateForm({}, schema)).toEqual({ username: 'is required', email: 'is required' });
});
