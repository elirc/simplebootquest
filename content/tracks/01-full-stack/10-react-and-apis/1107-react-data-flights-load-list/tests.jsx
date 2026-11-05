const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];

test('loading then data', async () => {
  const load = vi.fn(async () => FLIGHTS);
  const ui = mount(<FlightList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["IB6251","QF1","AF22","BA117","SQ25"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return FLIGHTS;
  });
  const ui = mount(<FlightList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
