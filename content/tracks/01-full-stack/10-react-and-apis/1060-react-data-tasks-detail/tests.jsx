const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 9, priority: 2, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Deploy API", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 5, status: "doing", assignee: "grace", blocked: false}
];
const byId = (id) => TASKS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<TaskDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Deploy API"));
  expect(ui.text()).toContain("priority: 5");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<TaskDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<TaskDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Review PR"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<TaskDetail id={1} load={load} />);
  ui.rerender(<TaskDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Add caching"));
});
