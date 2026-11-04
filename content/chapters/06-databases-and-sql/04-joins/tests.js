test('returns current loans with member, title and author', () => {
  expect(result).toEqual([
    { member: 'Ada', title: 'Kindred', author: 'Octavia E. Butler' },
    { member: 'Linus', title: 'Guards! Guards!', author: 'Terry Pratchett' },
    { member: 'Grace', title: 'Americanah', author: 'Chimamanda Ngozi Adichie' },
    { member: 'Ada', title: 'Small Gods', author: 'Terry Pratchett' },
  ]);
});
