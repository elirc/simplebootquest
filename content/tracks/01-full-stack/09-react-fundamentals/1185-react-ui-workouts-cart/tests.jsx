const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 32, calories: 254, kind: "strength"},
  {id: 2, label: "Mon lift", minutes: 19, calories: 516, kind: "cardio"},
  {id: 3, label: "Thu ride", minutes: 50, calories: 495, kind: "mobility"},
  {id: 4, label: "Thu yoga", minutes: 104, calories: 172, kind: "strength"},
  {id: 5, label: "Wed lift", minutes: 94, calories: 872, kind: "cardio"},
  {id: 6, label: "Sun walk", minutes: 62, calories: 125, kind: "mobility"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={WORKOUTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={WORKOUTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 1024');
});

test('never below zero', () => {
  const ui = mount(<Cart items={WORKOUTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
