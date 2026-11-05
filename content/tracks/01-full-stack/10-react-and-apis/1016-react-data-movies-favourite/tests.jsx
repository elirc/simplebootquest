test('toggles optimistically', async () => {
  const save = vi.fn(async () => {});
  const ui = mount(<Favourite id={1} initial={false} save={save} />);
  ui.click('button');
  expect(text(ui.find('button'))).toBe('★ Saved');
  expect(ui.find('button').props['aria-pressed']).toBe(true);
  await waitFor(() => expect(save).toHaveBeenCalledWith(1, true));
});

test('rolls back on failure', async () => {
  const ui = mount(<Favourite id={1} initial={true} save={async () => { throw new Error('x'); }} />);
  ui.click('button');
  await waitFor(() => expect(ui.text()).toContain('Could not save'));
  expect(text(ui.find('button'))).toBe('★ Saved');
});
