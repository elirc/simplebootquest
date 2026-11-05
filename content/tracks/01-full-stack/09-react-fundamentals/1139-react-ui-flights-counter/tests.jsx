test('starts at 0 with - disabled', () => {
  const ui = mount(<FlightCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 1 and stops at 6', () => {
  const ui = mount(<FlightCounter />);
  for (let i = 0; i < 7; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('6');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<FlightCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('1');
});
