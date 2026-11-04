test('sequential updates bump the version', () => {
  const store = createDocStore();
  const doc = store.create('v1');
  const updated = store.update(doc.id, 'v2', 1);
  expect(updated).toEqual({ id: 1, content: 'v2', version: 2 });
  expect(store.update(doc.id, 'v3', 2).version).toBe(3);
});

test('detects lost updates', () => {
  const store = createDocStore();
  const doc = store.create('original');
  const aliceCopy = store.get(doc.id);
  const bobCopy = store.get(doc.id);
  store.update(doc.id, 'alice edit', aliceCopy.version);
  try {
    store.update(doc.id, 'bob edit', bobCopy.version);
    throw new Error('should conflict');
  } catch (err) {
    expect(err).toBeInstanceOf(ConflictError);
    expect(err.current).toEqual({ id: 1, content: 'alice edit', version: 2 });
  }
  expect(store.get(doc.id).content).toBe('alice edit');
});

test('missing docs', () => {
  expect(() => createDocStore().update(9, 'x', 1)).toThrow(NotFoundError);
});

test('returns copies', () => {
  const store = createDocStore();
  const doc = store.create('x');
  doc.version = 99;
  expect(store.get(1).version).toBe(1);
});
