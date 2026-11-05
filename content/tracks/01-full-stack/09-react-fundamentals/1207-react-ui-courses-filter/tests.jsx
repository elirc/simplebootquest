const COURSES = [
  {id: 1, title: "Data Viz", lessons: 24, enrolled: 1520, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 22, enrolled: 3890, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 31, enrolled: 2513, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 34, enrolled: 159, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 16, enrolled: 4722, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 24, enrolled: 2421, level: "intermediate"}
];

test('shows everything at first', () => {
  const ui = mount(<CourseFilter items={COURSES} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<CourseFilter items={COURSES} />);
  ui.type('input', "NO");
  expect(ui.findAll('li').map(text)).toEqual(["Node APIs"]);
});

test('empty state', () => {
  const ui = mount(<CourseFilter items={COURSES} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
