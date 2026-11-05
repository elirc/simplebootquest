const ADA = { id: 1, role: 'member' };
const BOB = { id: 2, role: 'member' };
const EDI = { id: 3, role: 'editor' };
const ROOT = { id: 4, role: 'admin' };
const draft = { authorId: 1, status: 'draft' };
const live = { authorId: 1, status: 'published' };
test('read', () => {
  expect([null, BOB, ADA, EDI].map((u) => can(u, 'read', live))).toEqual([true, true, true, true]);
  expect([null, BOB, ADA, EDI, ROOT].map((u) => can(u, 'read', draft))).toEqual([false, false, true, true, true]);
});
test('update', () => {
  expect([null, BOB, ADA, EDI].map((u) => can(u, 'update', draft))).toEqual([false, false, true, true]);
  expect([ADA, EDI, ROOT].map((u) => can(u, 'update', live))).toEqual([false, true, true]);
});
test('publish', () => {
  expect([ADA, EDI, ROOT].map((u) => can(u, 'publish', draft))).toEqual([false, true, true]);
  expect(can(EDI, 'publish', live)).toBe(false);
});
test('delete', () => {
  expect([BOB, ADA, EDI, ROOT].map((u) => can(u, 'delete', draft))).toEqual([false, true, false, true]);
  expect([ADA, ROOT].map((u) => can(u, 'delete', live))).toEqual([false, true]);
});
test('unknown actions are denied', () => expect(can(ROOT, 'launch-missiles', live)).toBe(false));
