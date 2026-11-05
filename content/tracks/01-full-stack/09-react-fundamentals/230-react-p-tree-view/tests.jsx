const NODES = [
  { id: 'src', name: 'src', children: [
    { id: 'app', name: 'App.tsx' },
    { id: 'components', name: 'components', children: [{ id: 'btn', name: 'Button.tsx' }] },
  ] },
  { id: 'readme', name: 'README.md' },
];
const items = (el) => findAll(el, (n) => n.props.role === 'treeitem');
test('collapsed by default', () => {
  const el = render(<Tree nodes={NODES} expanded={new Set()} onToggle={() => {}} />);
  expect(el.props.role).toBe('tree');
  expect(items(el).length).toBe(2);
  expect(items(el).map((i) => i.props['aria-expanded'])).toEqual([false, undefined]);
  expect(findAll(el, 'button').map((b) => b.props['aria-label'])).toEqual(['Expand src']);
});
test('expanding shows children in a group', () => {
  const el = render(<Tree nodes={NODES} expanded={new Set(['src'])} onToggle={() => {}} />);
  expect(items(el).length).toBe(4);
  expect(findAll(el, (n) => n.props.role === 'group').length).toBe(1);
  expect(findAll(el, 'button').map((b) => b.props['aria-label'])).toEqual(['Collapse src', 'Expand components']);
});
test('deep expansion', () => {
  const el = render(<Tree nodes={NODES} expanded={new Set(['src', 'components'])} onToggle={() => {}} />);
  expect(text(el).includes('Button.tsx')).toBe(true);
  expect(findAll(el, (n) => n.props.role === 'group').length).toBe(2);
});
test('expanded ids of hidden nodes do not leak', () => {
  const el = render(<Tree nodes={NODES} expanded={new Set(['components'])} onToggle={() => {}} />);
  expect(text(el).includes('Button.tsx')).toBe(false);
});
test('toggle', () => {
  const onToggle = vi.fn();
  const el = render(<Tree nodes={NODES} expanded={new Set()} onToggle={onToggle} />);
  find(el, 'button').props.onClick();
  expect(onToggle).toHaveBeenCalledWith('src');
});
