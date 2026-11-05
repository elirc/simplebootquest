const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 16, calories: 742, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 115, calories: 728, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 41, calories: 854, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 94, calories: 448, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 24, calories: 443, kind: "cardio"}
];
const search = vi.fn(async (q) => WORKOUTS.filter((x) => x.label.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<WorkoutSearch search={search} />);
  ui.type('input', '  tu ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Tue swim"]);
  expect(search).toHaveBeenCalledWith('tu');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<WorkoutSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<WorkoutSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
