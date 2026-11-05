const COURSES = [
  {id: 1, title: "Data Viz", lessons: 24, enrolled: 1520, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 22, enrolled: 3890, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 31, enrolled: 2513, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 34, enrolled: 159, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 16, enrolled: 4722, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 24, enrolled: 2421, level: "intermediate"}
];

test('one tab per level', () => {
  const ui = mount(<CourseTabs items={COURSES} />);
  expect(ui.findAll('button').map(text)).toEqual(["intermediate","advanced","beginner"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Data Viz","React Basics","GraphQL","Intro to SQL"]);
});

test('switching tabs', () => {
  const ui = mount(<CourseTabs items={COURSES} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["CSS Layouts"]);
});
