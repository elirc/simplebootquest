const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 9, priority: 2, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Deploy API", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 5, status: "doing", assignee: "grace", blocked: false}
];
const loadPage = vi.fn(async (page) => ({ items: TASKS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < TASKS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<TaskFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Plan sprint","Deploy API","Review PR","Add caching","Update deps"]));
  expect(ui.find('button')).toBeUndefined();
});
