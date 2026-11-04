const noop = () => {};
const todos = [{ id: 1, title: 'Fetch data' }, { id: 2, title: 'Render it' }];

test('loading state', () => {
  for (const state of [{ status: 'idle' }, { status: 'loading' }]) {
    const el = render(<TodoScreen state={state} onRetry={noop} onAdd={noop} />);
    expect(el.type).toBe('p');
    expect(el.props['aria-busy']).toBe('true');
    expect(text(el)).toBe('Loading…');
  }
});

test('error state with retry', () => {
  let retried = 0;
  const el = render(<TodoScreen state={{ status: 'error', error: 'HTTP 500' }} onRetry={() => retried++} onAdd={noop} />);
  expect(el.props.role).toBe('alert');
  expect(text(find(el, 'p'))).toBe('HTTP 500');
  find(el, 'button').props.onClick();
  expect(retried).toBe(1);
});

test('empty state with call to action', () => {
  let added = 0;
  const el = render(<TodoScreen state={{ status: 'success', data: [], fetchedAt: 1 }} onRetry={noop} onAdd={() => added++} />);
  expect(el.props.className).toBe('empty');
  expect(text(find(el, 'p'))).toBe('No todos yet');
  find(el, 'button').props.onClick();
  expect(added).toBe(1);
});

test('success renders a keyed list', () => {
  const el = render(<TodoScreen state={{ status: 'success', data: todos, fetchedAt: 1 }} onRetry={noop} onAdd={noop} />);
  expect(findAll(el, 'li').map(text)).toEqual(['Fetch data', 'Render it']);
  const ul = TodoScreen({ state: { status: 'success', data: todos, fetchedAt: 1 }, onRetry: noop, onAdd: noop });
  expect(ul.props.children.map((li) => li.key)).toEqual([1, 2]);
});

test('refetching shows previous data instead of a spinner', () => {
  const nodes = renderAll(<TodoScreen state={{ status: 'loading', previous: todos }} onRetry={noop} onAdd={noop} />);
  expect(nodes).toHaveLength(1);
  expect(nodes[0].type).toBe('ul');
});

test('errors with previous data show a banner above the list', () => {
  const nodes = renderAll(<TodoScreen state={{ status: 'error', error: 'Offline', previous: todos }} onRetry={noop} onAdd={noop} />);
  expect(nodes.map((n) => n.type)).toEqual(['div', 'ul']);
  expect(nodes[0].props.role).toBe('alert');
});
