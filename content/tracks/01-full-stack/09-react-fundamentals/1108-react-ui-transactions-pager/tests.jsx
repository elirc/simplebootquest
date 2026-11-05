const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];

test('first page', () => {
  const ui = mount(<TransactionPager items={TRANSACTIONS} />);
  expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-06"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<TransactionPager items={TRANSACTIONS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["TX-07","TX-10","TX-03"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
