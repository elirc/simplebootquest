const TASKS = [
  {id: 1, title: "Fix login", estimate: 10, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Write tests", estimate: 2, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: true}
];

test('ascending first', () => {
  const ui = mount(<TaskSorter items={TASKS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Write tests","Refactor auth","Write docs","Review PR","Add search","Fix login"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<TaskSorter items={TASKS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Fix login","Add search","Review PR","Refactor auth","Write docs","Write tests"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(TASKS);
  const ui = mount(<TaskSorter items={TASKS} />);
  ui.click('button');
  expect(JSON.stringify(TASKS)).toBe(before);
});
