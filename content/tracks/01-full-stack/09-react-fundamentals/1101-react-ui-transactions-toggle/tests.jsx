const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];

test('starts hidden', () => {
  const ui = mount(<TransactionToggle items={TRANSACTIONS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show transactions');
});

test('shows and hides', () => {
  const ui = mount(<TransactionToggle items={TRANSACTIONS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-06","TX-07","TX-10","TX-03"]);
  expect(text(ui.find('button'))).toBe('Hide transactions');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
