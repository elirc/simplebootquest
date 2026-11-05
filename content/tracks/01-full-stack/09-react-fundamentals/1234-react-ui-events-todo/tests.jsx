const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<EventList />);
  ui.type('input', '  Workshop ');
  ui.submit('form');
  ui.type('input', 'Hackathon');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Workshop","Hackathon"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<EventList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<EventList />);
  for (const t of ["Workshop","Hackathon","Code Dojo"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Workshop","Code Dojo"]);
});
