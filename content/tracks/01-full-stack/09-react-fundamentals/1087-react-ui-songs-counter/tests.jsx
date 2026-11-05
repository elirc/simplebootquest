test('starts at 0 with - disabled', () => {
  const ui = mount(<SongCounter />);
  expect(text(ui.find('span'))).toBe('0');
  expect(ui.getByText('-').props.disabled).toBe(true);
});

test('steps by 2 and stops at 6', () => {
  const ui = mount(<SongCounter />);
  for (let i = 0; i < 6; i++) ui.click(ui.getByText('+'));
  expect(text(ui.find('span'))).toBe('6');
  expect(ui.getByText('+').props.disabled).toBe(true);
});

test('goes back down', () => {
  const ui = mount(<SongCounter />);
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('+'));
  ui.click(ui.getByText('-'));
  expect(text(ui.find('span'))).toBe('2');
});
