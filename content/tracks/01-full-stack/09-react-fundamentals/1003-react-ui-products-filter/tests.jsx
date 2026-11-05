const PRODUCTS = [
  {id: 1, name: "Notebook", price: 48, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 65, stock: 18, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 22, stock: 13, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 52, stock: 19, category: "office", onSale: false},
  {id: 5, name: "Mouse Pad", price: 85, stock: 31, category: "office", onSale: true},
  {id: 6, name: "Coffee Mug", price: 76, stock: 26, category: "office", onSale: false}
];

test('shows everything at first', () => {
  const ui = mount(<ProductFilter items={PRODUCTS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<ProductFilter items={PRODUCTS} />);
  ui.type('input', "BA");
  expect(ui.findAll('li').map(text)).toEqual(["Backpack"]);
});

test('empty state', () => {
  const ui = mount(<ProductFilter items={PRODUCTS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
