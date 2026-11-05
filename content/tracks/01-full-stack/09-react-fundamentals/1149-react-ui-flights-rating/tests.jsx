const star = (ui, n) => ui.find((el) => el.props['aria-label'] === `Rate ${n}`);

test('renders 3 empty stars', () => {
  const ui = mount(<Rating />);
  expect(ui.findAll('button').map(text).join('')).toBe('☆☆☆');
  expect(text(ui.find('p'))).toBe('0/3');
});

test('rates', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 2));
  expect(ui.findAll('button').map(text).join('')).toBe('★★☆');
  expect(text(ui.find('p'))).toBe('2/3');
});

test('clicking the same star resets', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 2));
  ui.click(star(ui, 2));
  expect(text(ui.find('p'))).toBe('0/3');
});
