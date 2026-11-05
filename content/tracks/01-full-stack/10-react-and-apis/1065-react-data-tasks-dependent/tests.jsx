const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 9, priority: 2, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Deploy API", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 5, status: "doing", assignee: "grace", blocked: false}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? TASKS.slice(0, 1) : TASKS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<TaskBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Deploy API","Review PR","Add caching","Update deps"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
