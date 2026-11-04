const author = { id: 1, role: 'member' };
const otherMember = { id: 2, role: 'member' };
const editor = { id: 3, role: 'editor' };
const admin = { id: 4, role: 'admin' };
const draft = { authorId: 1, status: 'draft' };
const published = { authorId: 1, status: 'published' };

test('anyone can read published posts', () => {
  for (const u of [null, author, otherMember, editor, admin]) expect(can(u, 'read', published)).toBe(true);
});

test('drafts are private', () => {
  expect(can(null, 'read', draft)).toBe(false);
  expect(can(otherMember, 'read', draft)).toBe(false);
  expect(can(author, 'read', draft)).toBe(true);
  expect(can(editor, 'read', draft)).toBe(true);
});

test('update rules', () => {
  expect(can(author, 'update', published)).toBe(true);
  expect(can(editor, 'update', published)).toBe(true);
  expect(can(admin, 'update', draft)).toBe(true);
  expect(can(otherMember, 'update', published)).toBe(false);
  expect(can(null, 'update', published)).toBe(false);
});

test('delete rules', () => {
  expect(can(author, 'delete', draft)).toBe(true);
  expect(can(admin, 'delete', draft)).toBe(true);
  expect(can(editor, 'delete', draft)).toBe(false);
  expect(can(otherMember, 'delete', draft)).toBe(false);
});

test('publish rules', () => {
  expect(can(author, 'publish', draft)).toBe(false);
  expect(can(editor, 'publish', draft)).toBe(true);
  expect(can(admin, 'publish', draft)).toBe(true);
});

test('default deny', () => {
  expect(can(admin, 'transfer-ownership', draft)).toBe(false);
  expect(can(null, 'delete', published)).toBe(false);
});
