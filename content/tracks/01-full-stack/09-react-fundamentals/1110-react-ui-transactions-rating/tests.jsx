const star = (ui, n) => ui.find((el) => el.props['aria-label'] === `Rate ${n}`);

test('renders 10 empty stars', () => {
  const ui = mount(<Rating />);
  expect(ui.findAll('button').map(text).join('')).toBe('☆☆☆☆☆☆☆☆☆☆');
  expect(text(ui.find('p'))).toBe('0/10');
});

test('rates', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 3));
  expect(ui.findAll('button').map(text).join('')).toBe('★★★☆☆☆☆☆☆☆');
  expect(text(ui.find('p'))).toBe('3/10');
});

test('clicking the same star resets', () => {
  const ui = mount(<Rating />);
  ui.click(star(ui, 3));
  ui.click(star(ui, 3));
  expect(text(ui.find('p'))).toBe('0/10');
});
