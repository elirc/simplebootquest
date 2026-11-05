test('shows the count', () => {
  const el = render(<Badge count={5} />);
  expect(el.type).toBe('span');
  expect(el.props.className).toBe('badge');
  expect(text(el)).toBe('5');
  expect(el.props['aria-label']).toBe('5 notifications');
});
test('caps the visible count', () => {
  const el = render(<Badge count={150} />);
  expect(text(el)).toBe('99+');
  expect(el.props['aria-label']).toBe('150 notifications');
  expect(text(render(<Badge count={10} max={9} label="messages" />))).toBe('9+');
});
test('renders nothing for zero', () => {
  expect(renderAll(<Badge count={0} />)).toEqual([]);
  expect(renderAll(<Badge count={-1} />)).toEqual([]);
});
test('custom label', () => expect(render(<Badge count={2} label="messages" />).props['aria-label']).toBe('2 messages'));
