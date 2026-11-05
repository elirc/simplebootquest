const labels = (ui) => ui.findAll('li').map((li) => text(li).replace('Remove', ''));

test('adds trimmed items and clears the input', () => {
  const ui = mount(<RepoList />);
  ui.type('input', '  api-gateway ');
  ui.submit('form');
  ui.type('input', 'auth-service');
  ui.submit('form');
  expect(labels(ui)).toEqual(["api-gateway","auth-service"]);
  expect(ui.find('input').props.value).toBe('');
});

test('ignores blank input', () => {
  const ui = mount(<RepoList />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(ui.findAll('li')).toEqual([]);
});

test('removes items', () => {
  const ui = mount(<RepoList />);
  for (const t of ["api-gateway","auth-service","search"]) {
    ui.type('input', t);
    ui.submit('form');
  }
  ui.click(ui.findAll('li')[1].children.find((c) => c.type === 'button'));
  expect(labels(ui)).toEqual(["api-gateway","search"]);
});
