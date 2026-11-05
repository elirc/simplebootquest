test('starts at 0 with - disabled', () => {
  const ui = mount(<CityCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 2 and stops at 10', () => {
  const ui = mount(<CityCounter />);
  for (let i = 0; i < 8; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('10');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<CityCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('2');
});
