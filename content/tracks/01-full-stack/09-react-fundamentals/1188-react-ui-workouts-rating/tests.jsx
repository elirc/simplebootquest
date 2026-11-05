const star = (ui, n) => ui.find((el) => el.props['aria-label'] === `Rate ${n}`);

test('renders 5 empty stars', () => {
  const ui = mount(<Rating />);
  expect(ui.findAll('button').map(text).join('')).toBe('☆☆☆☆☆');
  expect(text(ui.find('p'))).toBe('0/5');
});

test('rates', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 4));
  expect(ui.findAll('button').map(text).join('')).toBe('★★★★☆');
  expect(text(ui.find('p'))).toBe('4/5');
});

test('clicking the same star resets', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 4));
  ui.click(star(ui, 4));
  expect(text(ui.find('p'))).toBe('0/5');
});
