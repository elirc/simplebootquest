const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];
const byId = (id) => FLIGHTS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<FlightDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("QF1"));
  expect(ui.text()).toContain("delay (minutes): 141");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<FlightDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<FlightDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("AF22"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<FlightDetail id={1} load={load} />);
  ui.rerender(<FlightDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("BA117"));
});
