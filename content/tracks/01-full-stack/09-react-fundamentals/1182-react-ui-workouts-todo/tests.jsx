const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<WorkoutList />);
  ui.type('input', '  Tue run ');
  ui.submit('form');
  ui.type('input', 'Mon lift');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Tue run","Mon lift"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<WorkoutList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<WorkoutList />);
  for (const t of ["Tue run","Mon lift","Thu ride"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Tue run","Thu ride"]);
});
