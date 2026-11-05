const ORDERS = [
  {id: 1, code: "D-401", totalCents: 1668, items: 8, status: "shipped", country: "UK"},
  {id: 2, code: "C-300", totalCents: 14405, items: 7, status: "shipped", country: "DE"},
  {id: 3, code: "A-100", totalCents: 13253, items: 2, status: "paid", country: "DE"},
  {id: 4, code: "D-400", totalCents: 14009, items: 9, status: "shipped", country: "US"},
  {id: 5, code: "E-501", totalCents: 5636, items: 9, status: "pending", country: "US"},
  {id: 6, code: "B-201", totalCents: 9691, items: 6, status: "paid", country: "US"}
];

test('ascending first', () => {
  const ui = mount(<OrderSorter items={ORDERS} />);
  expect(ui.findAll('li').map(text)).toEqual(["D-401","E-501","B-201","A-100","D-400","C-300"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<OrderSorter items={ORDERS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["C-300","D-400","A-100","B-201","E-501","D-401"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(ORDERS);
  const ui = mount(<OrderSorter items={ORDERS} />);
  ui.click('button');
  expect(JSON.stringify(ORDERS)).toBe(before);
});
