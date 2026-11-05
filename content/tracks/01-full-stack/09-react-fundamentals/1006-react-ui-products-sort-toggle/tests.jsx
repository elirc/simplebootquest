const PRODUCTS = [
  {id: 1, name: "Notebook", price: 48, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 65, stock: 18, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 22, stock: 13, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 52, stock: 19, category: "office", onSale: false},
  {id: 5, name: "Mouse Pad", price: 85, stock: 31, category: "office", onSale: true},
  {id: 6, name: "Coffee Mug", price: 76, stock: 26, category: "office", onSale: false}
];

test('ascending first', () => {
  const ui = mount(<ProductSorter items={PRODUCTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Notebook","Pen Set","Backpack","Headphones","Coffee Mug","Mouse Pad"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<ProductSorter items={PRODUCTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Mouse Pad","Coffee Mug","Headphones","Backpack","Pen Set","Notebook"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(PRODUCTS);
  const ui = mount(<ProductSorter items={PRODUCTS} />);
  ui.click('button');
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});
