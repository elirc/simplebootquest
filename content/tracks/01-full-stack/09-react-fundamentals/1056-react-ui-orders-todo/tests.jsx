const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<OrderList />);
  ui.type('input', '  D-401 ');
  ui.submit('form');
  ui.type('input', 'C-300');
  ui.submit('form');
  expect(labels(ui)).toEqual(["D-401","C-300"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<OrderList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<OrderList />);
  for (const t of ["D-401","C-300","A-100"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["D-401","A-100"]);
});
