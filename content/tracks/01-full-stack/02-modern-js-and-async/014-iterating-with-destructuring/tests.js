test('contactList', () => {
  expect(contactList([{ name: 'Ada', email: 'a@x.io', id: 1 }])).toEqual(['Ada <a@x.io>']);
});

test('numbered', () => {
  expect(numbered(['first', 'second'])).toEqual(['1. first', '2. second']);
});

test('buildUrl defaults', () => {
  expect(buildUrl()).toBe('http://localhost:3000/');
  expect(buildUrl({ port: 8080, path: '/api', secure: true })).toBe('https://localhost:8080/api');
});
