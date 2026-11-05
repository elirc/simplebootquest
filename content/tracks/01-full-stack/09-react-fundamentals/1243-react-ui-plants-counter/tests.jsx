test('starts at 0 with - disabled', () => {
  const ui = mount(<PlantCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 4 and stops at 24', () => {
  const ui = mount(<PlantCounter />);
  for (let i = 0; i < 6; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('24');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<PlantCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('4');
});
