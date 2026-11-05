const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 16, calories: 742, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 115, calories: 728, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 41, calories: 854, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 94, calories: 448, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 24, calories: 443, kind: "cardio"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(WORKOUTS.filter((x) => x.label.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveWorkoutSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "tu");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Tue swim"]));
  expect(signals[1].aborted).toBe(true);
});
