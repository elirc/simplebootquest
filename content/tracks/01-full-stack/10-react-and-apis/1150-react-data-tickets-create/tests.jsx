test('saves and clears', async () => {
  const create = vi.fn(async () => ({ id: 1 }));
  const ui = mount(<NewTicket create={create} />);
  ui.type('input', "Dark mode");
  ui.submit('form');
  await waitFor(() => expect(ui.text()).toContain('Saved!'));
  expect(create).toHaveBeenCalledWith({ subject: "Dark mode" });
  expect(ui.find('input').props.value).toBe('');
});

test('shows a saving state', async () => {
  let done;
  const ui = mount(<NewTicket create={() => new Promise((r) => (done = r))} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find('button'))).toBe('Saving…'));
  expect(ui.find('button').props.disabled).toBe(true);
  done({});
  await waitFor(() => expect(text(ui.find('button'))).toBe('Save'));
});

test('shows errors and keeps the input', async () => {
  const ui = mount(<NewTicket create={async () => { throw new Error('Ticket already exists'); }} />);
  ui.type('input', 'dup');
  ui.submit('form');
  await waitFor(() => expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('Ticket already exists'));
  expect(ui.find('input').props.value).toBe('dup');
});
