const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];

test('shows everything at first', () => {
  const ui = mount(<WorkoutFilter items={WORKOUTS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<WorkoutFilter items={WORKOUTS} />);
  ui.type('input', "MO");
  expect(ui.findAll('li').map(text)).toEqual(["Mon lift"]);
});

test('empty state', () => {
  const ui = mount(<WorkoutFilter items={WORKOUTS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
