const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<StudentList />);
  ui.type('input', '  Dara ');
  ui.submit('form');
  ui.type('input', 'Gita');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Dara","Gita"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<StudentList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<StudentList />);
  for (const t of ["Dara","Gita","Hugo"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Dara","Hugo"]);
});
