const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];

test('ascending first', () => {
  const ui = mount(<WorkoutSorter items={WORKOUTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Sun walk","Thu yoga","Tue run","Thu ride","Mon lift","Wed lift"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<WorkoutSorter items={WORKOUTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Wed lift","Mon lift","Thu ride","Tue run","Thu yoga","Sun walk"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(WORKOUTS);
  const ui = mount(<WorkoutSorter items={WORKOUTS} />);
  ui.click('button');
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});
