const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<TicketList />);
  ui.type('input', '  Feature idea ');
  ui.submit('form');
  ui.type('input', 'Dark mode');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Feature idea","Dark mode"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<TicketList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<TicketList />);
  for (const t of ["Feature idea","Dark mode","Refund request"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Feature idea","Refund request"]);
});
