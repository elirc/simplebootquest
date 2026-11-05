const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 45, enrolled: 2945, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 33, enrolled: 3407, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 43, enrolled: 838, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 11, enrolled: 2625, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 36, enrolled: 1571, level: "intermediate"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? COURSES.slice(0, 1) : COURSES.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<CourseBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Testing JS","Data Viz","TypeScript 101","GraphQL"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
