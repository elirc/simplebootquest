const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<HotelList />);
  ui.type('input', '  Cityloft ');
  ui.submit('form');
  ui.type('input', 'Pine Lodge');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Cityloft","Pine Lodge"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<HotelList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<HotelList />);
  for (const t of ["Cityloft","Pine Lodge","Harbour View"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Cityloft","Harbour View"]);
});
