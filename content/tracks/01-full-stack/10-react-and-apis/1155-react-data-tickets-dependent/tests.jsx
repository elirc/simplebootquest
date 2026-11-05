const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 126, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 71, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Bug in export", ageHours: 171, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Email change", ageHours: 9, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 97, replies: 8, priority: "normal", channel: "phone", resolved: false}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? TICKETS.slice(0, 1) : TICKETS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<TicketBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Missing order","Bug in export","Email change","Refund request"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
