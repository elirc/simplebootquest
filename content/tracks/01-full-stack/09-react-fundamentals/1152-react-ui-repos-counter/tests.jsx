test('starts at 0 with - disabled', () => {
  const ui = mount(<RepoCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 5 and stops at 30', () => {
  const ui = mount(<RepoCounter />);
  for (let i = 0; i < 9; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('30');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<RepoCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('5');
});
