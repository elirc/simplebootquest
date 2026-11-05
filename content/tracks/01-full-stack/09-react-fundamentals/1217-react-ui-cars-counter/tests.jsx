test('starts at 0 with - disabled', () => {
  const ui = mount(<CarCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 3 and stops at 12', () => {
  const ui = mount(<CarCounter />);
  for (let i = 0; i < 5; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('12');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<CarCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('3');
});
