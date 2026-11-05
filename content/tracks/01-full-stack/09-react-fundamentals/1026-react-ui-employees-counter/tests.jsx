test('starts at 0 with - disabled', () => {
  const ui = mount(<EmployeeCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 1 and stops at 4', () => {
  const ui = mount(<EmployeeCounter />);
  for (let i = 0; i < 6; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('4');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<EmployeeCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('1');
});
