const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 76, delayMin: 43, seats: 44, airline: "skyteam"},
  {id: 2, number: "TK1", durationMin: 82, delayMin: 63, seats: 21, airline: "oneworld"},
  {id: 3, number: "IB6251", durationMin: 190, delayMin: 176, seats: 44, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 545, delayMin: 138, seats: 28, airline: "oneworld"},
  {id: 5, number: "UA90", durationMin: 839, delayMin: 27, seats: 30, airline: "skyteam"},
  {id: 6, number: "DL15", durationMin: 520, delayMin: 135, seats: 36, airline: "oneworld"}
];

test('shows everything at first', () => {
  const ui = mount(<FlightFilter items={FLIGHTS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<FlightFilter items={FLIGHTS} />);
  ui.type('input', "TK");
  expect(ui.findAll('li').map(text)).toEqual(["TK1"]);
});

test('empty state', () => {
  const ui = mount(<FlightFilter items={FLIGHTS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
