const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<CourseList />);
  ui.type('input', '  Data Viz ');
  ui.submit('form');
  ui.type('input', 'Node APIs');
  ui.submit('form');
  expect(labels(ui)).toEqual(["Data Viz","Node APIs"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<CourseList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<CourseList />);
  for (const t of ["Data Viz","Node APIs","React Basics"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["Data Viz","React Basics"]);
});
