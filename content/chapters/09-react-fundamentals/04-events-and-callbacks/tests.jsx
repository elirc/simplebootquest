test('TodoRow renders a checkbox, title and delete button', () => {
  const el = render(<TodoRow todo={{ id: 7, title: 'Walk dog', done: true }} onToggle={() => {}} onDelete={() => {}} />);
  expect(el.type).toBe('li');
  const box = find(el, 'input');
  expect(box.props.type).toBe('checkbox');
  expect(box.props.checked).toBe(true);
  expect(text(find(el, 'span'))).toBe('Walk dog');
  expect(text(find(el, 'button'))).toBe('Delete');
});

test('TodoRow reports events with the id', () => {
  const calls = [];
  const el = render(
    <TodoRow todo={{ id: 7, title: 'x', done: false }} onToggle={(id) => calls.push(['toggle', id])} onDelete={(id) => calls.push(['delete', id])} />,
  );
  find(el, 'input').props.onChange();
  find(el, 'button').props.onClick();
  expect(calls).toEqual([['toggle', 7], ['delete', 7]]);
});

test('TodoRow does not call handlers during render', () => {
  let called = false;
  render(<TodoRow todo={{ id: 1, title: 'x', done: false }} onToggle={() => (called = true)} onDelete={() => (called = true)} />);
  expect(called).toBe(false);
});

test('Pagination shows the current page', () => {
  const el = render(<Pagination page={2} totalPages={5} onPageChange={() => {}} />);
  expect(el.type).toBe('nav');
  expect(text(find(el, 'span'))).toBe('Page 2 of 5');
});

test('Pagination buttons change pages', () => {
  const pages = [];
  const el = render(<Pagination page={2} totalPages={5} onPageChange={(p) => pages.push(p)} />);
  find(el, (e) => e.props.className === 'prev').props.onClick();
  find(el, (e) => e.props.className === 'next').props.onClick();
  expect(pages).toEqual([1, 3]);
});

test('Pagination disables buttons at the edges', () => {
  const first = render(<Pagination page={1} totalPages={3} onPageChange={() => {}} />);
  expect(find(first, (e) => e.props.className === 'prev').props.disabled).toBe(true);
  expect(find(first, (e) => e.props.className === 'next').props.disabled).toBe(false);
  const last = render(<Pagination page={3} totalPages={3} onPageChange={() => {}} />);
  expect(find(last, (e) => e.props.className === 'next').props.disabled).toBe(true);
});
