test('adds two per click', () => {
  const ui = mount(<DoubleClick />);
  ui.click('button');
  ui.click('button');
  ui.click('button');
  expect(text(ui.find('span'))).toBe('7');
});
