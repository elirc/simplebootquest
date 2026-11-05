const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 76, delayMin: 43, seats: 44, airline: "skyteam"},
  {id: 2, number: "TK1", durationMin: 82, delayMin: 63, seats: 21, airline: "oneworld"},
  {id: 3, number: "IB6251", durationMin: 190, delayMin: 176, seats: 44, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 545, delayMin: 138, seats: 28, airline: "oneworld"},
  {id: 5, number: "UA90", durationMin: 839, delayMin: 27, seats: 30, airline: "skyteam"},
  {id: 6, number: "DL15", durationMin: 520, delayMin: 135, seats: 36, airline: "oneworld"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={FLIGHTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={FLIGHTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 234');
});

test('never below zero', () => {
  const ui = mount(<Cart items={FLIGHTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
