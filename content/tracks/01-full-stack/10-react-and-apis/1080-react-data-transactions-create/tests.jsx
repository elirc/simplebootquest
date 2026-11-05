test('saves and clears', async () => {
  const create = vi.fn(async () => ({ id: 1 }));
  const ui = mount(<NewTransaction create={create} />);
  ui.type('input', "TX-09");
  ui.submit('form');
  await waitFor(() => expect(ui.text()).toContain('Saved!'));
  expect(create).toHaveBeenCalledWith({ reference: "TX-09" });
  expect(ui.find('input').props.value).toBe('');
});

test('shows a saving state', async () => {
  let done;
  const ui = mount(<NewTransaction create={() => new Promise((r) => (done = r))} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find('button'))).toBe('Saving…'));
  expect(ui.find('button').props.disabled).toBe(true);
  done({});
  await waitFor(() => expect(text(ui.find('button'))).toBe('Save'));
});

test('shows errors and keeps the input', async () => {
  const ui = mount(<NewTransaction create={async () => { throw new Error('Transaction already exists'); }} />);
  ui.type('input', 'dup');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('Transaction already exists'));
  expect(ui.find('input').props.value).toBe('dup');
});
