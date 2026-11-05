test('converts', () => {
  const ui = mount(<Converter />);
  ui.type('input', '34');
  expect(text(ui.find('output'))).toBe('36.7');
});

test('empty and invalid input show nothing', () => {
  const ui = mount(<Converter />);
  expect(text(ui.find('output'))).toBe('');
  ui.type('input', 'abc');
  expect(text(ui.find('output'))).toBe('');
});

test('zero is a valid value', () => {
  const ui = mount(<Converter />);
  ui.type('input', '0');
  expect(text(ui.find('output'))).toBe('0');
});
