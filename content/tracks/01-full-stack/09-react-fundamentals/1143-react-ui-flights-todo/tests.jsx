const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<FlightList />);
  ui.type('input', '  QF1 ');
  ui.submit('form');
  ui.type('input', 'TK1');
  ui.submit('form');
  expect(labels(ui)).toEqual(["QF1","TK1"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<FlightList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<FlightList />);
  for (const t of ["QF1","TK1","IB6251"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["QF1","IB6251"]);
});
