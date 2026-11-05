const items = [
  { sku: 'P1', name: 'Pen', price: 150, qty: 10, category: 'office' },
  { sku: 'N1', name: 'Notebook', price: 400, qty: 2, category: 'office' },
  { sku: 'M1', name: 'Mug', price: 800, qty: 2, category: 'kitchen' },
  { sku: 'K1', name: 'Kettle', price: 2500, qty: 0, category: 'kitchen' },
];
test('totalValue', () => expect(totalValue(items)).toBe(1500 + 800 + 1600));
test('valueByCategory', () => expect(valueByCategory(items)).toEqual({ office: 2300, kitchen: 1600 }));
test('restockList', () => expect(restockList(items, 5)).toEqual(['K1', 'M1', 'N1']));
