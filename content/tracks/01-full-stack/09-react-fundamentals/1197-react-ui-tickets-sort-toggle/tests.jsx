const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];

test('ascending first', () => {
  const ui = mount(<TicketSorter items={TICKETS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Refund request","Feature idea","Email change","Dark mode","Bug in export","Slow page"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<TicketSorter items={TICKETS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Slow page","Dark mode","Bug in export","Feature idea","Email change","Refund request"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(TICKETS);
  const ui = mount(<TicketSorter items={TICKETS} />);
  ui.click('button');
  expect(JSON.stringify(TICKETS)).toBe(before);
});
