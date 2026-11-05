const COURSES = [
  {id: 1, title: "Data Viz", lessons: 24, enrolled: 1520, level: "intermediate"},
  {id: 2, title: "Node APIs", lessons: 22, enrolled: 3890, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 31, enrolled: 2513, level: "intermediate"},
  {id: 4, title: "CSS Layouts", lessons: 34, enrolled: 159, level: "beginner"},
  {id: 5, title: "GraphQL", lessons: 16, enrolled: 4722, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 24, enrolled: 2421, level: "intermediate"}
];

test('first page', () => {
  const ui = mount(<CoursePager items={COURSES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Data Viz","Node APIs"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<CoursePager items={COURSES} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["GraphQL","Intro to SQL"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
