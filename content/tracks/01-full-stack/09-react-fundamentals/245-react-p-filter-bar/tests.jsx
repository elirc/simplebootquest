const TODOS = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Learn React', done: true },
  { id: 3, title: 'Buy bread', done: true },
  { id: 4, title: 'Walk dog', done: false },
];
test('filters', () => {
  expect(visibleTodos(TODOS, 'all', '').map((t) => t.id)).toEqual([1, 2, 3, 4]);
  expect(visibleTodos(TODOS, 'active', '').map((t) => t.id)).toEqual([1, 4]);
  expect(visibleTodos(TODOS, 'done', '').map((t) => t.id)).toEqual([2, 3]);
});
test('search combines with the filter', () => {
  expect(visibleTodos(TODOS, 'all', '  BUY ').map((t) => t.id)).toEqual([1, 3]);
  expect(visibleTodos(TODOS, 'done', 'buy').map((t) => t.id)).toEqual([3]);
});
test('counts', () => expect(counts(TODOS)).toEqual({ all: 4, active: 2, done: 2 }));
test('filter bar', () => {
  const el = render(<FilterBar todos={TODOS} filter="active" onFilter={() => {}} />);
  expect(el.props.role).toBe('group');
  const buttons = findAll(el, 'button');
  expect(buttons.map(text)).toEqual(['All (4)', 'Active (2)', 'Done (2)']);
  expect(buttons.map((b) => b.props['aria-pressed'])).toEqual([false, true, false]);
});
test('clicking a filter', () => {
  const onFilter = vi.fn();
  findAll(render(<FilterBar todos={TODOS} filter="all" onFilter={onFilter} />), 'button')[2].props.onClick();
  expect(onFilter).toHaveBeenCalledWith('done');
});
