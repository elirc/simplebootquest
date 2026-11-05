test('starts at 0 with - disabled', () => {
  const ui = mount(<OrderCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 3 and stops at 18', () => {
  const ui = mount(<OrderCounter />);
  for (let i = 0; i < 4; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('12');
  expect(ui.getByText('+').props.disabled).toBe(false);
});

test('goes back down', () => {
  const ui = mount(<OrderCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('3');
});
