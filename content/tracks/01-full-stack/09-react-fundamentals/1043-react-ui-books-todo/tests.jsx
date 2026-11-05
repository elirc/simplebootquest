const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<BookList />);
  ui.type('input', '  Ulysses ');
  ui.submit('form');
  ui.type('input', 'Matilda');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Ulysses","Matilda"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<BookList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<BookList />);
  for (const t of ["Ulysses","Matilda","Clean Code"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Ulysses","Clean Code"]);
});
