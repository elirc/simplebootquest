const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 339, delayMin: 36, seats: 35, airline: "skyteam"},
  {id: 2, number: "QF1", durationMin: 671, delayMin: 141, seats: 33, airline: "star"},
  {id: 3, number: "AF22", durationMin: 613, delayMin: 77, seats: 24, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 70, delayMin: 10, seats: 23, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 155, delayMin: 136, seats: 37, airline: "oneworld"}
];
const search = vi.fn(async (q) => FLIGHTS.filter((x) => x.number.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<FlightSearch search={search} />);
  ui.type('input', '  ib ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["IB6251"]);
  expect(search).toHaveBeenCalledWith('ib');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<FlightSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<FlightSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
