const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];

test('first page', () => {
  const ui = mount(<TicketPager items={TICKETS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Feature idea","Dark mode","Refund request"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<TicketPager items={TICKETS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Slow page","Bug in export","Email change"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
