const todo = Object.freeze({ id: 1, ownerId: 9, createdAt: '2026-01-01', title: 'Write', done: false, dueDate: '2026-03-01', notes: 'n' });

test('missing keys are untouched, null clears nullable fields', () => {
  expect(applyPatch(todo, { dueDate: null })).toEqual({ ...todo, dueDate: null });
  expect(applyPatch(todo, {})).toEqual(todo);
  expect(applyPatch(todo, { notes: undefined })).toEqual(todo);
});

test('updates and trims', () => {
  expect(applyPatch(todo, { title: '  Ship  ', done: true })).toMatchObject({ title: 'Ship', done: true });
});

test('immutable fields are ignored', () => {
  expect(applyPatch(todo, { id: 99, ownerId: 1, createdAt: 'x' })).toEqual(todo);
});

test('collects validation errors', () => {
  try {
    applyPatch(todo, { title: null, done: null, notes: null, isAdmin: true, dueDate: '2026-04-01' });
    throw new Error('should throw');
  } catch (err) {
    expect(err).toBeInstanceOf(ValidationError);
    expect(err.fields).toEqual({ title: 'cannot be null', done: 'cannot be null', isAdmin: 'unknown field' });
  }
  expect(() => applyPatch(todo, { title: '   ' })).toThrow(ValidationError);
});
