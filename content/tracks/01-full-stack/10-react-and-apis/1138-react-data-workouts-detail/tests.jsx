const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 16, calories: 742, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 115, calories: 728, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 41, calories: 854, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 94, calories: 448, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 24, calories: 443, kind: "cardio"}
];
const byId = (id) => WORKOUTS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<WorkoutDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Thu yoga"));
  expect(ui.text()).toContain("calories burned: 728");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<WorkoutDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<WorkoutDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Sat ride"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<WorkoutDetail id={1} load={load} />);
  ui.rerender(<WorkoutDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Wed lift"));
});
