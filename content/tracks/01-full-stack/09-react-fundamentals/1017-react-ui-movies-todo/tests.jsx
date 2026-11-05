const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<MovieList />);
  ui.type('input', '  Night Train ');
  ui.submit('form');
  ui.type('input', 'Last Light');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Night Train","Last Light"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<MovieList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<MovieList />);
  for (const t of ["Night Train","Last Light","Quiet Storm"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Night Train","Quiet Storm"]);
});
