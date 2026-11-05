const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<ProductList />);
  ui.type('input', '  Notebook ');
  ui.submit('form');
  ui.type('input', 'Backpack');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Notebook","Backpack"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<ProductList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<ProductList />);
  for (const t of ["Notebook","Backpack","Pen Set"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Notebook","Pen Set"]);
});
