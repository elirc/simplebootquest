test('cleans and filters', () => {
  expect(cleanRows([
    { name: ' Pen ', price: '1.50', stock: '10' },
    { name: '', price: '2', stock: '1' },
    { name: 'Cup', price: 'abc', stock: '1' },
    { name: 'Mug', price: '3.333', stock: '' },
    { name: 'pen', price: '9', stock: '1' },
    { name: 'Bag', price: '-1', stock: '1' },
    { name: 'Box', price: '4', stock: '2.5' },
  ])).toEqual([
    { name: 'Pen', priceCents: 150, stock: 10 },
    { name: 'Mug', priceCents: 333, stock: 0 },
  ]);
});
