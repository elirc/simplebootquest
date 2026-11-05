const STUDENTS = [
  {id: 1, name: "Chen", score: 48, age: 29, course: "web", graduated: true},
  {id: 2, name: "Amara", score: 87, age: 34, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 94, age: 17, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 58, age: 25, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 80, age: 17, course: "design", graduated: false}
];
const byId = (id) => STUDENTS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<StudentDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Amara"));
  expect(ui.text()).toContain("score: 87");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<StudentDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<StudentDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Bilal"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<StudentDetail id={1} load={load} />);
  ui.rerender(<StudentDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Luca"));
});
