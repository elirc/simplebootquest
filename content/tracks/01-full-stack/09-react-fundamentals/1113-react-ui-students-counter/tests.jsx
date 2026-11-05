test('starts at 0 with - disabled', () => {
  const ui = mount(<StudentCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 4 and stops at 12', () => {
  const ui = mount(<StudentCounter />);
  for (let i = 0; i < 2; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('8');
  expect(ui.getByText('+').props.disabled).toBe(false);
});

test('goes back down', () => {
  const ui = mount(<StudentCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('4');
});
