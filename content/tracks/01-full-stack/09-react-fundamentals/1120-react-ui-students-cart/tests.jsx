const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 23, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 32, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 42, age: 27, course: "web", graduated: false},
  {id: 4, name: "Femi", score: 96, age: 31, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 45, age: 24, course: "web", graduated: true},
  {id: 6, name: "Amara", score: 62, age: 24, course: "web", graduated: true}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={STUDENTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={STUDENTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 202');
});

test('never below zero', () => {
  const ui = mount(<Cart items={STUDENTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
