test('loads and refreshes, keeping the old number visible', async () => {
  let n = 5;
  let release;
  const fetchCount = vi.fn(() => new Promise((r) => (release = () => r(n))));
  const ui = mount(<CarCount fetchCount={fetchCount} />);
  release();
  await waitFor(() => expect(text(ui.find('p'))).toBe('5 cars'));
  n = 8;
  ui.click(ui.getByText('Refresh'));
  await waitFor(() => expect(text(ui.find('button'))).toBe('Refreshing…'));
  expect(text(ui.find('p'))).toBe('5 cars');
  release();
  await waitFor(() => expect(text(ui.find('p'))).toBe('8 cars'));
  expect(fetchCount).toHaveBeenCalledTimes(2);
});
