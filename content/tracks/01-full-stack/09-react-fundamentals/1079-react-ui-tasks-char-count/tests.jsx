test('counts characters', () => {
  const ui = mount(<NoteField onSave={() => {}} />);
  expect(ui.getByText('0/30')).toBeDefined();
  ui.type('textarea', 'hello');
  expect(ui.getByText('5/30')).toBeDefined();
});

test('disables save when empty or too long', () => {
  const ui = mount(<NoteField onSave={() => {}} />);
  expect(ui.getByText('Save').props.disabled).toBe(true);
  ui.type('textarea', '   ');
  expect(ui.getByText('Save').props.disabled).toBe(true);
  ui.type('textarea', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  expect(ui.getByText('Save').props.disabled).toBe(true);
  expect(text(ui.find((n) => n.props.role === 'alert'))).toBe('Too long');
});

test('saves', () => {
  const onSave = vi.fn();
  const ui = mount(<NoteField onSave={onSave} />);
  ui.type('textarea', 'ship it');
  ui.click(ui.getByText('Save'));
  expect(onSave).toHaveBeenCalledWith('ship it');
});
