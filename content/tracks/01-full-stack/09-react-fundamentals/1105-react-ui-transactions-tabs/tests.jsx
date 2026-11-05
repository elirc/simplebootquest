const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];

test('one tab per category', () => {
  const ui = mount(<TransactionTabs items={TRANSACTIONS} />);
  expect(ui.findAll('button').map(text)).toEqual(["fun","food","salary"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-06"]);
});

test('switching tabs', () => {
  const ui = mount(<TransactionTabs items={TRANSACTIONS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["TX-10","TX-03"]);
});
