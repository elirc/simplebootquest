const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];
const loadPage = vi.fn(async (page) => ({ items: FLIGHTS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < FLIGHTS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<FlightFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["IB6251","QF1","AF22","BA117","SQ25"]));
  expect(ui.find('button')).toBeUndefined();
});
