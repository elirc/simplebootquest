const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 23, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 32, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 42, age: 27, course: "web", graduated: false},
  {id: 4, name: "Femi", score: 96, age: 31, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 45, age: 24, course: "web", graduated: true},
  {id: 6, name: "Amara", score: 62, age: 24, course: "web", graduated: true}
];

test('one tab per course', () => {
  const ui = mount(<StudentTabs items={STUDENTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["data","web"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Dara","Femi"]);
});

test('switching tabs', () => {
  const ui = mount(<StudentTabs items={STUDENTS} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["Gita","Hugo","Chen","Amara"]);
});
