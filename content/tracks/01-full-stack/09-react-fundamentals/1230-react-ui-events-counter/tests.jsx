test('starts at 0 with - disabled', () => {
  const ui = mount(<EventCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 2 and stops at 8', () => {
  const ui = mount(<EventCounter />);
  for (let i = 0; i < 6; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('8');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<EventCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('2');
});
