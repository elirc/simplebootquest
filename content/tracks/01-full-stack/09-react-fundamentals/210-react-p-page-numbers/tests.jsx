test('pageItems', () => {
  expect(pageItems(6, 50)).toEqual([1, '…', 5, 6, 7, '…', 50]);
  expect(pageItems(1, 50)).toEqual([1, 2, '…', 50]);
  expect(pageItems(50, 50)).toEqual([1, '…', 49, 50]);
  expect(pageItems(3, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(pageItems(4, 10, 2)).toEqual([1, 2, 3, 4, 5, 6, '…', 10]);
  expect(pageItems(1, 1)).toEqual([1]);
});
test('a gap of one page shows the page', () => expect(pageItems(4, 10)).toEqual([1, 2, 3, 4, 5, '…', 10]));
test('renders buttons and gaps', () => {
  const el = render(<Pagination page={6} total={50} onChange={() => {}} />);
  expect(el.props['aria-label']).toBe('Pagination');
  expect(findAll(el, 'button').map(text)).toEqual(['‹', '1', '5', '6', '7', '50', '›']);
  expect(findAll(el, 'span').map(text)).toEqual(['…', '…']);
  const current = findAll(el, (n) => n.props['aria-current'] === 'page');
  expect(current.map(text)).toEqual(['6']);
});
test('prev/next disabled at the ends', () => {
  const first = render(<Pagination page={1} total={3} onChange={() => {}} />);
  expect(find(first, (n) => n.props['aria-label'] === 'Previous page').props.disabled).toBe(true);
  expect(find(first, (n) => n.props['aria-label'] === 'Next page').props.disabled).toBe(false);
  const last = render(<Pagination page={3} total={3} onChange={() => {}} />);
  expect(find(last, (n) => n.props['aria-label'] === 'Next page').props.disabled).toBe(true);
});
test('clicks call onChange', () => {
  const onChange = vi.fn();
  const el = render(<Pagination page={6} total={50} onChange={onChange} />);
  findAll(el, 'button').find((b) => text(b) === '50').props.onClick();
  find(el, (n) => n.props['aria-label'] === 'Next page').props.onClick();
  expect(onChange).toHaveBeenCalledWith(50);
  expect(onChange).toHaveBeenCalledWith(7);
});
