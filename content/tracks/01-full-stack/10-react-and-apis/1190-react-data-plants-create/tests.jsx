test('saves and clears', async () => {
  const create = vi.fn(async () => ({ id: 1 }));
  const ui = mount(<NewPlant create={create} />);
  ui.type('input', "Snake Plant");
  ui.submit('form');
  await waitFor(() => expect(ui.text()).toContain('Saved!'));
  expect(create).toHaveBeenCalledWith({ name: "Snake Plant" });
  expect(ui.find('input').props.value).toBe('');
});

test('shows a saving state', async () => {
  let done;
  const ui = mount(<NewPlant create={() => new Promise((r) => (done = r))} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find('button'))).toBe('Saving…'));
  expect(ui.find('button').props.disabled).toBe(true);
  done({});
  await waitFor(() => expect(text(ui.find('button'))).toBe('Save'));
});

test('shows errors and keeps the input', async () => {
  const ui = mount(<NewPlant create={async () => { throw new Error('Plant already exists'); }} />);
  ui.type('input', 'dup');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('Plant already exists'));
  expect(ui.find('input').props.value).toBe('dup');
});
