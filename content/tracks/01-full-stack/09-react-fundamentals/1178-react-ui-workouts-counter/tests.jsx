test('starts at 0 with - disabled', () => {
  const ui = mount(<WorkoutCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 3 and stops at 15', () => {
  const ui = mount(<WorkoutCounter />);
  for (let i = 0; i < 7; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('15');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<WorkoutCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('3');
});
