test('passes complete objects through', () => {
  const draft = { name: 'Ada', email: 'a@x.io', bio: undefined };
  expect(requireFields(draft, ['name', 'email'])).toBe(draft);
});
test('lists every missing field', () => {
  expect(() => requireFields({ email: '', name: null, age: 3 }, ['email', 'name', 'age'])).toThrow('Missing required fields: email, name');
});
