const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];

test('one tab per priority', () => {
  const ui = mount(<TicketTabs items={TICKETS} />);
  expect(ui.findAll('button').map(text)).toEqual(["normal","urgent"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Feature idea","Dark mode","Refund request"]);
});

test('switching tabs', () => {
  const ui = mount(<TicketTabs items={TICKETS} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["Slow page","Bug in export","Email change"]);
});
