const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 23, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 32, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 42, age: 27, course: "web", graduated: false},
  {id: 4, name: "Femi", score: 96, age: 31, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 45, age: 24, course: "web", graduated: true},
  {id: 6, name: "Amara", score: 62, age: 24, course: "web", graduated: true}
];

test('starts hidden', () => {
  const ui = mount(<StudentToggle items={STUDENTS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show students');
});

test('shows and hides', () => {
  const ui = mount(<StudentToggle items={STUDENTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Dara","Gita","Hugo","Femi","Chen","Amara"]);
  expect(text(ui.find('button'))).toBe('Hide students');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
