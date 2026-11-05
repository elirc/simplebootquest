const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? FLIGHTS.slice(0, 1) : FLIGHTS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<FlightBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["QF1","AF22","BA117","SQ25"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
