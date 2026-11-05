const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 23, course: "data", graduated: false},
  {id: 2, name: "Gita", score: 32, age: 33, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 42, age: 27, course: "web", graduated: false},
  {id: 4, name: "Femi", score: 96, age: 31, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 45, age: 24, course: "web", graduated: true},
  {id: 6, name: "Amara", score: 62, age: 24, course: "web", graduated: true}
];

test('ascending first', () => {
  const ui = mount(<StudentSorter items={STUDENTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Gita","Hugo","Chen","Amara","Dara","Femi"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<StudentSorter items={STUDENTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Femi","Dara","Amara","Chen","Hugo","Gita"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(STUDENTS);
  const ui = mount(<StudentSorter items={STUDENTS} />);
  ui.click('button');
  expect(JSON.stringify(STUDENTS)).toBe(before);
});
