const PRODUCTS = [
  {id: 1, name: "Notebook", price: 48, stock: 12, category: "office", onSale: true},
  {id: 2, name: "Backpack", price: 65, stock: 18, category: "home", onSale: false},
  {id: 3, name: "Pen Set", price: 22, stock: 13, category: "tech", onSale: true},
  {id: 4, name: "Headphones", price: 52, stock: 19, category: "office", onSale: false},
  {id: 5, name: "Mouse Pad", price: 85, stock: 31, category: "office", onSale: true},
  {id: 6, name: "Coffee Mug", price: 76, stock: 26, category: "office", onSale: false}
];

test('one tab per category', () => {
  const ui = mount(<ProductTabs items={PRODUCTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["office","home","tech"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Notebook","Headphones","Mouse Pad","Coffee Mug"]);
});

test('switching tabs', () => {
  const ui = mount(<ProductTabs items={PRODUCTS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Pen Set"]);
});
