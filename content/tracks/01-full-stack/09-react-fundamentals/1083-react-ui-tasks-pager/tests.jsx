const TASKS = [
  {id: 1, title: "Fix login", estimate: 10, priority: 2, status: "todo", assignee: "ada", blocked: false},
  {id: 2, title: "Refactor auth", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 3, title: "Add search", estimate: 8, priority: 5, status: "done", assignee: "ada", blocked: false},
  {id: 4, title: "Write docs", estimate: 3, priority: 4, status: "done", assignee: "grace", blocked: false},
  {id: 5, title: "Write tests", estimate: 2, priority: 4, status: "doing", assignee: "grace", blocked: false},
  {id: 6, title: "Review PR", estimate: 4, priority: 4, status: "done", assignee: "ada", blocked: true}
];

test('first page', () => {
  const ui = mount(<TaskPager items={TASKS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Fix login","Refactor auth"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<TaskPager items={TASKS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Write tests","Review PR"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
