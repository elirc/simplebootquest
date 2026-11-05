test('starts at 0 with - disabled', () => {
  const ui = mount(<TransactionCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 1 and stops at 3', () => {
  const ui = mount(<TransactionCounter />);
  for (let i = 0; i < 7; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('3');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<TransactionCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('1');
});
