const TASKS = [
  {id: 1, title: "Fix login", estimate: 10, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Write tests", estimate: 2, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: true}
];

test('shows everything at first', () => {
  const ui = mount(<TaskFilter items={TASKS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<TaskFilter items={TASKS} />);
  ui.type('input', "RE");
  expect(ui.findAll('li').map(text)).toEqual(["Refactor auth","Review PR"]);
});

test('empty state', () => {
  const ui = mount(<TaskFilter items={TASKS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
