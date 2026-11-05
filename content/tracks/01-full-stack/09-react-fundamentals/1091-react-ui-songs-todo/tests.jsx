const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<SongList />);
  ui.type('input', '  Drift ');
  ui.submit('form');
  ui.type('input', 'Velvet');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Drift","Velvet"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<SongList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<SongList />);
  for (const t of ["Drift","Velvet","Echoes"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Drift","Echoes"]);
});
