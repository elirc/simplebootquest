const COURSES = [
  {id: 1, title: "Data Viz", lessons: 24, enrolled: 1520, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 22, enrolled: 3890, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 31, enrolled: 2513, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 34, enrolled: 159, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 16, enrolled: 4722, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 24, enrolled: 2421, level: "intermediate"}
];

test('starts hidden', () => {
  const ui = mount(<CourseToggle items={COURSES} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show courses');
});

test('shows and hides', () => {
  const ui = mount(<CourseToggle items={COURSES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Data Viz","Node APIs","React Basics","CSS Layouts","GraphQL","Intro to SQL"]);
  expect(text(ui.find('button'))).toBe('Hide courses');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
