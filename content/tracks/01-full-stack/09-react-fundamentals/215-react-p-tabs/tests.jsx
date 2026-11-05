const TABS = [
  { id: 'profile', label: 'Profile', content: <p>Your profile</p> },
  { id: 'security', label: 'Security', content: <p>Change password</p> },
  { id: 'billing', label: 'Billing', content: 'Invoices' },
];
test('tab buttons', () => {
  const el = render(<Tabs tabs={TABS} activeId="security" onChange={() => {}} />);
  const tabs = findAll(el, (n) => n.props.role === 'tab');
  expect(tabs.map(text)).toEqual(['Profile', 'Security', 'Billing']);
  expect(tabs.map((t) => t.props['aria-selected'])).toEqual([false, true, false]);
  expect(tabs.map((t) => t.props.tabIndex)).toEqual([-1, 0, -1]);
  expect(tabs[1].props.id).toBe('tab-security');
  expect(tabs[1].props['aria-controls']).toBe('panel-security');
  expect(find(el, (n) => n.props.role === 'tablist').children.length).toBe(3);
});
test('only the active panel renders', () => {
  const el = render(<Tabs tabs={TABS} activeId="security" onChange={() => {}} />);
  const panels = findAll(el, (n) => n.props.role === 'tabpanel');
  expect(panels.length).toBe(1);
  expect(text(panels[0])).toBe('Change password');
  expect(panels[0].props.id).toBe('panel-security');
  expect(panels[0].props['aria-labelledby']).toBe('tab-security');
});
test('falls back to the first tab', () => {
  const el = render(<Tabs tabs={TABS} activeId="nope" onChange={() => {}} />);
  expect(text(find(el, (n) => n.props.role === 'tabpanel'))).toBe('Your profile');
});
test('clicking calls onChange', () => {
  const onChange = vi.fn();
  const el = render(<Tabs tabs={TABS} activeId="profile" onChange={onChange} />);
  findAll(el, (n) => n.props.role === 'tab')[2].props.onClick();
  expect(onChange).toHaveBeenCalledWith('billing');
});
