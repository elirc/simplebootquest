const TASKS = [
  {id: 1, title: "Plan sprint", estimate: 9, priority: 2, status: "doing", assignee: "linus", blocked: false},
  {id: 2, title: "Deploy API", estimate: 10, priority: 5, status: "todo", assignee: "grace", blocked: false},
  {id: 3, title: "Review PR", estimate: 7, priority: 2, status: "doing", assignee: "ada", blocked: false},
  {id: 4, title: "Add caching", estimate: 12, priority: 3, status: "doing", assignee: "grace", blocked: true},
  {id: 5, title: "Update deps", estimate: 1, priority: 5, status: "doing", assignee: "grace", blocked: false}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(TASKS.filter((x) => x.title.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveTaskSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "pl");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Plan sprint","Deploy API"]));
  expect(signals[1].aborted).toBe(true);
});
