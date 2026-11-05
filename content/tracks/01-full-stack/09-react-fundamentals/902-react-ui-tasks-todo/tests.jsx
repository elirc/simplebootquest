const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<TaskList />);
  ui.type('input', '  Fix login ');
  ui.submit('form');
  ui.type('input', 'Refactor auth');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Fix login","Refactor auth"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<TaskList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<TaskList />);
  for (const t of ["Fix login","Refactor auth","Add search"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Fix login","Add search"]);
});
