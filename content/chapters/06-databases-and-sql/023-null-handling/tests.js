test('uses COALESCE for missing dates', () => {
  expect(result).toEqual([
    { id: 1, title: 'A Wizard of Earthsea', status: '2026-01-20' },
    { id: 2, title: 'Kindred', status: 'on loan' },
    { id: 3, title: 'Guards! Guards!', status: '2026-01-30' },
    { id: 4, title: 'Guards! Guards!', status: 'on loan' },
    { id: 5, title: 'Americanah', status: 'on loan' },
    { id: 6, title: 'Small Gods', status: 'on loan' },
  ]);
});
