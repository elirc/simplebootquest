const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 45, enrolled: 2945, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 33, enrolled: 3407, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 43, enrolled: 838, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 11, enrolled: 2625, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 36, enrolled: 1571, level: "intermediate"}
];

test('loading then data', async () => {
  const load = vi.fn(async () => COURSES);
  const ui = mount(<CourseList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Docker Intro","Testing JS","Data Viz","TypeScript 101","GraphQL"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return COURSES;
  });
  const ui = mount(<CourseList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
