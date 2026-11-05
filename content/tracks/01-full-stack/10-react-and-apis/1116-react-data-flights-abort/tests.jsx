const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(FLIGHTS.filter((x) => x.number.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveFlightSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ib");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["IB6251"]));
  expect(signals[1].aborted).toBe(true);
});
