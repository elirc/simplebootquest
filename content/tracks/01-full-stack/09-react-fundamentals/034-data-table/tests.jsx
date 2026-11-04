const rows = Object.freeze([
  { id: 1, name: 'Pen', price: 2 },
  { id: 2, name: 'Book', price: 12 },
  { id: 3, name: 'Cup', price: 6 },
]);
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'price', label: 'Price', sortable: true, render: (r) => `$${r.price}` },
  { key: 'id', label: 'ID' },
];

test('renders headers and cells', () => {
  const el = render(<DataTable rows={rows} columns={columns} onSort={() => {}} />);
  expect(findAll(el, 'th').map(text)).toEqual(['Name', 'Price', 'ID']);
  expect(findAll(find(el, 'tbody'), 'tr').map((tr) => findAll(tr, 'td').map(text))).toEqual([
    ['Pen', '$2', '1'], ['Book', '$12', '2'], ['Cup', '$6', '3'],
  ]);
  expect(findAll(el, 'button')).toHaveLength(2);
});

test('sorts without mutating', () => {
  const el = render(<DataTable rows={rows} columns={columns} sort={{ key: 'price', dir: 'desc' }} onSort={() => {}} />);
  expect(findAll(find(el, 'tbody'), 'tr').map((tr) => text(findAll(tr, 'td')[0]))).toEqual(['Book', 'Cup', 'Pen']);
  expect(findAll(el, 'th')[1].props['aria-sort']).toBe('descending');
  expect(findAll(el, 'th')[0].props['aria-sort']).toBeUndefined();
});

test('clicking toggles direction', () => {
  const calls = [];
  const el = render(<DataTable rows={rows} columns={columns} sort={{ key: 'name', dir: 'asc' }} onSort={(s) => calls.push(s)} />);
  const [nameBtn, priceBtn] = findAll(el, 'button');
  nameBtn.props.onClick();
  priceBtn.props.onClick();
  expect(calls).toEqual([{ key: 'name', dir: 'desc' }, { key: 'price', dir: 'asc' }]);
});

test('empty state', () => {
  const el = render(<DataTable rows={[]} columns={columns} onSort={() => {}} emptyMessage="Nothing yet" />);
  const td = find(find(el, 'tbody'), 'td');
  expect(td.props.colSpan).toBe(3);
  expect(text(td)).toBe('Nothing yet');
});
