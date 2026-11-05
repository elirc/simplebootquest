const PRODUCTS = [
  {id: 1, name: "Notebook", price: 48, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 65, stock: 18, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 22, stock: 13, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 52, stock: 19, category: "office", onSale: false},
  {id: 5, name: "Mouse Pad", price: 85, stock: 31, category: "office", onSale: true},
  {id: 6, name: "Coffee Mug", price: 76, stock: 26, category: "office", onSale: false}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={PRODUCTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={PRODUCTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 42');
});

test('never below zero', () => {
  const ui = mount(<Cart items={PRODUCTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
