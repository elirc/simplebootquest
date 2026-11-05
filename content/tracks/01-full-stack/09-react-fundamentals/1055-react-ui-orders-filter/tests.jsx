const ORDERS = [
  {id: 1, code: "D-401", totalCents: 1668, items: 8, status: "shipped", country: "UK"},
  {id: 2, code: "C-300", totalCents: 14405, items: 7, status: "shipped", country: "DE"},
  {id: 3, code: "A-100", totalCents: 13253, items: 2, status: "paid", country: "DE"},
  {id: 4, code: "D-400", totalCents: 14009, items: 9, status: "shipped", country: "US"},
  {id: 5, code: "E-501", totalCents: 5636, items: 9, status: "pending", country: "US"},
  {id: 6, code: "B-201", totalCents: 9691, items: 6, status: "paid", country: "US"}
];

test('shows everything at first', () => {
  const ui = mount(<OrderFilter items={ORDERS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<OrderFilter items={ORDERS} />);
  ui.type('input', "C-");
  expect(ui.findAll('li').map(text)).toEqual(["C-300"]);
});

test('empty state', () => {
  const ui = mount(<OrderFilter items={ORDERS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
