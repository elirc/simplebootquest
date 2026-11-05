const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<TransactionList />);
  ui.type('input', '  TX-09 ');
  ui.submit('form');
  ui.type('input', 'TX-02');
  ui.submit('form');
  expect(labels(ui)).toEqual(["TX-09","TX-02"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<TransactionList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<TransactionList />);
  for (const t of ["TX-09","TX-02","TX-06"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["TX-09","TX-06"]);
});
