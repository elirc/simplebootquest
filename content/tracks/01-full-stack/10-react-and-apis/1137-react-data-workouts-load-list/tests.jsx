const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 16, calories: 742, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 115, calories: 728, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 41, calories: 854, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 94, calories: 448, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 24, calories: 443, kind: "cardio"}
];

test('loading then data', async () => {
  const load = vi.fn(async () => WORKOUTS);
  const ui = mount(<WorkoutList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Tue swim","Thu yoga","Sat ride","Wed lift","Fri run"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return WORKOUTS;
  });
  const ui = mount(<WorkoutList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
