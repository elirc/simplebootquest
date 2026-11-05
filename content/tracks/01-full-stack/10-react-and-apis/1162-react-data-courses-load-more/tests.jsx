const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 45, enrolled: 2945, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 33, enrolled: 3407, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 43, enrolled: 838, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 11, enrolled: 2625, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 36, enrolled: 1571, level: "intermediate"}
];
const loadPage = vi.fn(async (page) => ({ items: COURSES.slice((page - 1) * 2, page * 2), hasMore: page * 2 < COURSES.length }));

test('loads pages and appends', async () => {
  const ui = mount(<CourseFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Docker Intro","Testing JS","Data Viz","TypeScript 101","GraphQL"]));
  expect(ui.find('button')).toBeUndefined();
});
