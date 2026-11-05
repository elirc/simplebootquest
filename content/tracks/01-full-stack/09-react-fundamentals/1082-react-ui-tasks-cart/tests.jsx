const TASKS = [
  {id: 1, title: "Fix login", estimate: 10, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Write tests", estimate: 2, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: true}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={TASKS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={TASKS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 23');
});

test('never below zero', () => {
  const ui = mount(<Cart items={TASKS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
