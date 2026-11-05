const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];

test('ascending first', () => {
  const ui = mount(<TransactionSorter items={TRANSACTIONS} />);
  expect(ui.findAll('li').map(text)).toEqual(["TX-02","TX-06","TX-10","TX-09","TX-03","TX-07"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<TransactionSorter items={TRANSACTIONS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["TX-07","TX-03","TX-09","TX-10","TX-06","TX-02"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(TRANSACTIONS);
  const ui = mount(<TransactionSorter items={TRANSACTIONS} />);
  ui.click('button');
  expect(JSON.stringify(TRANSACTIONS)).toBe(before);
});
