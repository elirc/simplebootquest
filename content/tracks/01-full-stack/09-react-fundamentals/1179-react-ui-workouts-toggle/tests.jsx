const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];

test('starts hidden', () => {
  const ui = mount(<WorkoutToggle items={WORKOUTS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show workouts');
});

test('shows and hides', () => {
  const ui = mount(<WorkoutToggle items={WORKOUTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Tue run","Mon lift","Thu ride","Thu yoga","Wed lift","Sun walk"]);
  expect(text(ui.find('button'))).toBe('Hide workouts');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
