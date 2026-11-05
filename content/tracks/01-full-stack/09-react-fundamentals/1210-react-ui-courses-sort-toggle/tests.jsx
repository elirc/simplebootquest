const COURSES = [
  {id: 1, title: "Data Viz", lessons: 24, enrolled: 1520, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 22, enrolled: 3890, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 31, enrolled: 2513, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 34, enrolled: 159, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 16, enrolled: 4722, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 24, enrolled: 2421, level: "intermediate"}
];

test('ascending first', () => {
  const ui = mount(<CourseSorter items={COURSES} />);
  expect(ui.findAll('li').map(text)).toEqual(["CSS Layouts","Data Viz","Intro to SQL","React Basics","Node APIs","GraphQL"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<CourseSorter items={COURSES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["GraphQL","Node APIs","React Basics","Intro to SQL","Data Viz","CSS Layouts"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(COURSES);
  const ui = mount(<CourseSorter items={COURSES} />);
  ui.click('button');
  expect(JSON.stringify(COURSES)).toBe(before);
});
