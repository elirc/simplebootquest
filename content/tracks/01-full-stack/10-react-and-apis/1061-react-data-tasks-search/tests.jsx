const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 9, priority: 2, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Deploy API", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 5, status: "doing", assignee: "grace", blocked: false}
];
const search = vi.fn(async (q) => TASKS.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<TaskSearch search={search} />);
  ui.type('input', '  pl ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('2 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Plan sprint","Deploy API"]);
  expect(search).toHaveBeenCalledWith('pl');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<TaskSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<TaskSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
