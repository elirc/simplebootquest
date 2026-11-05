const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];

test('shows everything at first', () => {
  const ui = mount(<TicketFilter items={TICKETS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<TicketFilter items={TICKETS} />);
  ui.type('input', "DA");
  expect(ui.findAll('li').map(text)).toEqual(["Dark mode"]);
});

test('empty state', () => {
  const ui = mount(<TicketFilter items={TICKETS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
