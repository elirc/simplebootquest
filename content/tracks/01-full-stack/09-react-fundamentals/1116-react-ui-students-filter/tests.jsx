const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 23, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 32, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 42, age: 27, course: "web", graduated: false},
  {id: 4, name: "Femi", score: 96, age: 31, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 45, age: 24, course: "web", graduated: true},
  {id: 6, name: "Amara", score: 62, age: 24, course: "web", graduated: true}
];

test('shows everything at first', () => {
  const ui = mount(<StudentFilter items={STUDENTS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<StudentFilter items={STUDENTS} />);
  ui.type('input', "GI");
  expect(ui.findAll('li').map(text)).toEqual(["Gita"]);
});

test('empty state', () => {
  const ui = mount(<StudentFilter items={STUDENTS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
