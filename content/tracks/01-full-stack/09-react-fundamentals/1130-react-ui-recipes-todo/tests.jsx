const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<RecipeList />);
  ui.type('input', '  Ramen ');
  ui.submit('form');
  ui.type('input', 'Lasagne');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Ramen","Lasagne"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<RecipeList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<RecipeList />);
  for (const t of ["Ramen","Lasagne","Tacos"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Ramen","Tacos"]);
});
