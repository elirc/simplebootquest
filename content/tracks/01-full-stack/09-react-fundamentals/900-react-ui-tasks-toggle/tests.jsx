const TASKS = [
  {id: 1, title: "Fix login", estimate: 10, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Write tests", estimate: 2, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: true}
];

test('starts hidden', () => {
  const ui = mount(<TaskToggle items={TASKS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show tasks');
});

test('shows and hides', () => {
  const ui = mount(<TaskToggle items={TASKS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Fix login","Refactor auth","Add search","Write docs","Write tests","Review PR"]);
  expect(text(ui.find('button'))).toBe('Hide tasks');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
