test('renders stars', () => {
  const el = render(<StarRating value={3} onRate={() => {}} />);
  expect(el.props['aria-label']).toBe('Rating: 3 out of 5');
  const buttons = findAll(el, 'button');
  expect(buttons.map(text).join('')).toBe('★★★☆☆');
  expect(buttons.map((b) => b.props['aria-label'])).toEqual(['Rate 1 out of 5', 'Rate 2 out of 5', 'Rate 3 out of 5', 'Rate 4 out of 5', 'Rate 5 out of 5']);
  expect(buttons.map((b) => b.props['aria-pressed'])).toEqual([false, false, true, false, false]);
  expect(buttons[0].props.type).toBe('button');
});
test('custom max', () => expect(findAll(render(<StarRating value={0} max={10} onRate={() => {}} />), 'button').length).toBe(10));
test('rating and clearing', () => {
  const onRate = vi.fn();
  const buttons = findAll(render(<StarRating value={3} onRate={onRate} />), 'button');
  buttons[4].props.onClick();
  buttons[2].props.onClick();
  expect(onRate).toHaveBeenCalledWith(5);
  expect(onRate).toHaveBeenCalledWith(0);
});
test('read-only', () => {
  const el = render(<StarRating value={2} max={4} readOnly />);
  expect(findAll(el, 'button')).toEqual([]);
  expect(text(el)).toBe('★★☆☆');
  expect(el.props['aria-label']).toBe('Rating: 2 out of 4');
});
