const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<PlantList />);
  ui.type('input', '  Fern ');
  ui.submit('form');
  ui.type('input', 'Monstera');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Fern","Monstera"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<PlantList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<PlantList />);
  for (const t of ["Fern","Monstera","Orchid"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Fern","Orchid"]);
});
