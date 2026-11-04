test('Layout places slots', () => {
  const el = render(<Layout header={<h1>App</h1>} sidebar={<nav>Filters</nav>}><p>Body</p></Layout>);
  expect(el.children.map((c) => c.type)).toEqual(['header', 'aside', 'main']);
  expect(text(find(el, 'main'))).toBe('Body');
  expect(render(<Layout header="x">y</Layout>).children.map((c) => c.type)).toEqual(['header', 'main']);
});

test('Modal renders nothing when closed', () => {
  expect(renderAll(<Modal open={false} title="x" onClose={() => {}} />)).toEqual([]);
});

test('Modal structure', () => {
  const el = render(<Modal open title="Settings" onClose={() => {}}><p>Body</p></Modal>);
  expect(el.props.role).toBe('dialog');
  expect(el.props['aria-label']).toBe('Settings');
  expect(text(find(el, 'h2'))).toBe('Settings');
  expect(findAll(el, 'button').map(text)).toEqual(['Close']);
});

test('ConfirmDelete composes Modal', () => {
  const calls = [];
  const el = render(<ConfirmDelete itemName="Todo #3" onConfirm={() => calls.push('confirm')} onCancel={() => calls.push('cancel')} />);
  expect(el.props['aria-label']).toBe('Delete Todo #3?');
  expect(text(find(el, 'p'))).toBe('This cannot be undone.');
  const [del, close] = findAll(el, 'button');
  expect(del.props.className).toBe('danger');
  del.props.onClick();
  close.props.onClick();
  expect(calls).toEqual(['confirm', 'cancel']);
});
