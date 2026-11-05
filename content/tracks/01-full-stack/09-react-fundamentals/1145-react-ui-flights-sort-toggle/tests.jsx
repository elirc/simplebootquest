const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 76, delayMin: 43, seats: 44, airline: "skyteam"},
  {id: 2, number: "TK1", durationMin: 82, delayMin: 63, seats: 21, airline: "oneworld"},
  {id: 3, number: "IB6251", durationMin: 190, delayMin: 176, seats: 44, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 545, delayMin: 138, seats: 28, airline: "oneworld"},
  {id: 5, number: "UA90", durationMin: 839, delayMin: 27, seats: 30, airline: "skyteam"},
  {id: 6, number: "DL15", durationMin: 520, delayMin: 135, seats: 36, airline: "oneworld"}
];

test('ascending first', () => {
  const ui = mount(<FlightSorter items={FLIGHTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["QF1","TK1","IB6251","DL15","SQ25","UA90"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<FlightSorter items={FLIGHTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["UA90","SQ25","DL15","IB6251","TK1","QF1"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(FLIGHTS);
  const ui = mount(<FlightSorter items={FLIGHTS} />);
  ui.click('button');
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});
