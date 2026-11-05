const users = [
  { name: 'Grace', age: 85, country: 'US', active: false },
  { name: 'Ada', age: 36, country: 'UK', active: true },
  { name: 'Linus', age: 54, country: 'FI', active: true },
  { name: 'Alan', age: 41, country: 'UK', active: true },
];
test('no filters', () => expect(findUsers(users)).toEqual(['Ada', 'Alan', 'Grace', 'Linus']));
test('age range inclusive', () => expect(findUsers(users, { minAge: 36, maxAge: 54 })).toEqual(['Ada', 'Alan', 'Linus']));
test('country and active', () => {
  expect(findUsers(users, { country: 'UK' })).toEqual(['Ada', 'Alan']);
  expect(findUsers(users, { activeOnly: true, minAge: 40 })).toEqual(['Alan', 'Linus']);
});
