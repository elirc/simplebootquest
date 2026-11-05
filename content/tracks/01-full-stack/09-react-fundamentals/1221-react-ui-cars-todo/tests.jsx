const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<CarList />);
  ui.type('input', '  Fiesta ');
  ui.submit('form');
  ui.type('input', 'Polo');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Fiesta","Polo"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<CarList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<CarList />);
  for (const t of ["Fiesta","Polo","Model 3"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Fiesta","Model 3"]);
});
