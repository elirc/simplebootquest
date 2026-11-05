const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 45, enrolled: 2945, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 33, enrolled: 3407, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 43, enrolled: 838, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 11, enrolled: 2625, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 36, enrolled: 1571, level: "intermediate"}
];
const byId = (id) => COURSES.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CourseDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Testing JS"));
  expect(ui.text()).toContain("enrolments: 3407");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CourseDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<CourseDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Data Viz"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<CourseDetail id={1} load={load} />);
  ui.rerender(<CourseDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("TypeScript 101"));
});
