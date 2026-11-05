const COURSES = [
  {id: 1, title: "Docker Intro", lessons: 45, enrolled: 2945, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 33, enrolled: 3407, level: "beginner"},
  {id: 3, title: "Data Viz", lessons: 43, enrolled: 838, level: "advanced"},
  {id: 4, title: "TypeScript 101", lessons: 11, enrolled: 2625, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 36, enrolled: 1571, level: "intermediate"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(COURSES.filter((x) => x.title.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveCourseSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "do");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Docker Intro"]));
  expect(signals[1].aborted).toBe(true);
});
