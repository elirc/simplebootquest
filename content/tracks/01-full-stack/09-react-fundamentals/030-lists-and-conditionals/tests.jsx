const sampleTodos = [
  { id: 1, title: 'Learn JSX', done: true },
  { id: 2, title: 'Learn keys', done: false },
  { id: 3, title: 'Build app', done: false },
];

test('TodoItem marks done items', () => {
  expect(render(<TodoItem todo={sampleTodos[0]} />).props.className).toBe('todo done');
  expect(render(<TodoItem todo={sampleTodos[1]} />).props.className).toBe('todo');
  expect(text(render(<TodoItem todo={sampleTodos[1]} />))).toBe('Learn keys');
});

test('TodoList renders every todo', () => {
  const el = render(<TodoList todos={sampleTodos} />);
  expect(el.type).toBe('ul');
  expect(findAll(el, 'li').map(text)).toEqual(['Learn JSX', 'Learn keys', 'Build app']);
});

test('TodoList filters', () => {
  expect(findAll(<TodoList todos={sampleTodos} filter="active" />, 'li').map(text)).toEqual(['Learn keys', 'Build app']);
  expect(findAll(<TodoList todos={sampleTodos} filter="done" />, 'li').map(text)).toEqual(['Learn JSX']);
});

test('TodoList uses todo ids as keys', () => {
  const ul = TodoList({ todos: sampleTodos });
  expect(ul.props.children.map((child) => child.key)).toEqual([1, 2, 3]);
});

test('TodoList shows an empty state', () => {
  const el = render(<TodoList todos={[]} />);
  expect(el.type).toBe('p');
  expect(el.props.className).toBe('empty');
  expect(text(render(<TodoList todos={[sampleTodos[1]]} filter="done" />))).toBe('Nothing here!');
});

test('Counter renders nothing for zero', () => {
  expect(renderAll(<Counter count={0} />)).toEqual([]);
  expect(text(render(<Counter count={3} />))).toBe('3');
});
