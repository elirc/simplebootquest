const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 76, delayMin: 43, seats: 44, airline: "skyteam"},
  {id: 2, number: "TK1", durationMin: 82, delayMin: 63, seats: 21, airline: "oneworld"},
  {id: 3, number: "IB6251", durationMin: 190, delayMin: 176, seats: 44, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 545, delayMin: 138, seats: 28, airline: "oneworld"},
  {id: 5, number: "UA90", durationMin: 839, delayMin: 27, seats: 30, airline: "skyteam"},
  {id: 6, number: "DL15", durationMin: 520, delayMin: 135, seats: 36, airline: "oneworld"}
];

test('one tab per airline', () => {
  const ui = mount(<FlightTabs items={FLIGHTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["skyteam","oneworld"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["QF1","UA90"]);
});

test('switching tabs', () => {
  const ui = mount(<FlightTabs items={FLIGHTS} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["TK1","IB6251","SQ25","DL15"]);
});
