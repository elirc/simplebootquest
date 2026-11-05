const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: 335, day: 26, category: "fun"},
  {id: 2, reference: "TX-02", amount: -253, day: 12, category: "fun"},
  {id: 3, reference: "TX-06", amount: 133, day: 16, category: "fun"},
  {id: 4, reference: "TX-07", amount: 666, day: 27, category: "food"},
  {id: 5, reference: "TX-10", amount: 228, day: 8, category: "salary"},
  {id: 6, reference: "TX-03", amount: 337, day: 23, category: "salary"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={TRANSACTIONS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={TRANSACTIONS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 417');
});

test('never below zero', () => {
  const ui = mount(<Cart items={TRANSACTIONS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
