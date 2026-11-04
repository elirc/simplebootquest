function fakeRepo() {
  const notes = new Map();
  let nextId = 1;
  const calls = [];
  return {
    calls,
    notes,
    async findById(id) { return notes.get(id) ?? null; },
    async findByOwner(ownerId) { return [...notes.values()].filter((n) => n.ownerId === ownerId); },
    async create(data) { calls.push(['create', data]); const note = { id: nextId++, ...data }; notes.set(note.id, note); return note; },
    async update(id, data) { calls.push(['update', id, data]); const note = { ...notes.get(id), ...data }; notes.set(id, note); return note; },
    async delete(id) { calls.push(['delete', id]); notes.delete(id); },
    async countByOwner(ownerId) { return [...notes.values()].filter((n) => n.ownerId === ownerId).length; },
  };
}

test('creates notes with trimmed titles and default body', async () => {
  const repo = fakeRepo();
  const service = createNoteService(repo);
  const note = await service.create(1, { title: '  Groceries ' });
  expect(note).toEqual({ id: 1, ownerId: 1, title: 'Groceries', body: '' });
});

test('requires a title', async () => {
  const service = createNoteService(fakeRepo());
  await expect(service.create(1, { title: '  ' })).rejects.toThrow(ValidationError);
  await expect(service.create(1, {})).rejects.toThrow('Title is required');
});

test('enforces the note limit per user', async () => {
  const service = createNoteService(fakeRepo());
  for (const t of ['a', 'b', 'c']) await service.create(1, { title: t });
  await expect(service.create(1, { title: 'd' })).rejects.toThrow('Note limit reached');
  await expect(service.create(2, { title: 'other user is fine' })).resolves.toBeDefined();
});

test('lists only the user\'s notes', async () => {
  const service = createNoteService(fakeRepo());
  await service.create(1, { title: 'mine' });
  await service.create(2, { title: 'theirs' });
  expect((await service.list(1)).map((n) => n.title)).toEqual(['mine']);
});

test('get hides other users\' notes', async () => {
  const service = createNoteService(fakeRepo());
  const note = await service.create(1, { title: 'secret' });
  await expect(service.get(1, note.id)).resolves.toMatchObject({ title: 'secret' });
  await expect(service.get(2, note.id)).rejects.toThrow(NotFoundError);
  await expect(service.get(1, 999)).rejects.toThrow('Note not found');
});

test('update checks ownership and only changes title/body', async () => {
  const repo = fakeRepo();
  const service = createNoteService(repo);
  const note = await service.create(1, { title: 'a' });
  await expect(service.update(2, note.id, { title: 'hacked' })).rejects.toThrow(NotFoundError);
  const updated = await service.update(1, note.id, { title: ' b ', ownerId: 2, id: 50 });
  expect(updated).toEqual({ id: 1, ownerId: 1, title: 'b', body: '' });
  await expect(service.update(1, note.id, { title: '' })).rejects.toThrow(ValidationError);
});

test('remove checks ownership', async () => {
  const repo = fakeRepo();
  const service = createNoteService(repo);
  const note = await service.create(1, { title: 'a' });
  await expect(service.remove(2, note.id)).rejects.toThrow(NotFoundError);
  expect(repo.notes.size).toBe(1);
  await service.remove(1, note.id);
  expect(repo.notes.size).toBe(0);
});
