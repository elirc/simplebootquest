const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];

test('starts hidden', () => {
  const ui = mount(<TicketToggle items={TICKETS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show tickets');
});

test('shows and hides', () => {
  const ui = mount(<TicketToggle items={TICKETS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Feature idea","Dark mode","Refund request","Slow page","Bug in export","Email change"]);
  expect(text(ui.find('button'))).toBe('Hide tickets');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
