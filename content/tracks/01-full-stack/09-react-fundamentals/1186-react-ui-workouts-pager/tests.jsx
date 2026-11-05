const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];

test('first page', () => {
  const ui = mount(<WorkoutPager items={WORKOUTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Tue run","Mon lift","Thu ride"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<WorkoutPager items={WORKOUTS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Thu yoga","Wed lift","Sun walk"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
