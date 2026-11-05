const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];

test('one tab per kind', () => {
  const ui = mount(<WorkoutTabs items={WORKOUTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["strength","cardio","mobility"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Tue run","Thu yoga"]);
});

test('switching tabs', () => {
  const ui = mount(<WorkoutTabs items={WORKOUTS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Thu ride","Sun walk"]);
});
