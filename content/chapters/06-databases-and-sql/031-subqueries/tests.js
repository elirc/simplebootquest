test('authors with a book out', () => {
  expect(result.map((r) => r.name)).toEqual(['Chimamanda Ngozi Adichie', 'Octavia E. Butler', 'Terry Pratchett']);
});
