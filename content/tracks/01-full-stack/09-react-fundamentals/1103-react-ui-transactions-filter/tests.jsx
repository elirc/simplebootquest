const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];

test('shows everything at first', () => {
  const ui = mount(<TransactionFilter items={TRANSACTIONS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<TransactionFilter items={TRANSACTIONS} />);
  ui.type('input', "TX");
  expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-06","TX-07","TX-10","TX-03"]);
});

test('empty state', () => {
  const ui = mount(<TransactionFilter items={TRANSACTIONS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
