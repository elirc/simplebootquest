const ORDERS = [
  {id: 1, code: "D-401", totalCents: 1668, items: 8, status: "shipped", country: "UK"},
  {id: 2, code: "C-300", totalCents: 14405, items: 7, status: "shipped", country: "DE"},
  {id: 3, code: "A-100", totalCents: 13253, items: 2, status: "paid", country: "DE"},
  {id: 4, code: "D-400", totalCents: 14009, items: 9, status: "shipped", country: "US"},
  {id: 5, code: "E-501", totalCents: 5636, items: 9, status: "pending", country: "US"},
  {id: 6, code: "B-201", totalCents: 9691, items: 6, status: "paid", country: "US"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={ORDERS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={ORDERS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 17741');
});

test('never below zero', () => {
  const ui = mount(<Cart items={ORDERS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
