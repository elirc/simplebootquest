const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 54, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 90, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 155, replies: 3, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 128, replies: 9, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 200, replies: 6, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Email change", ageHours: 91, replies: 5, priority: "urgent", channel: "phone", resolved: true}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={TICKETS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={TICKETS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 16');
});

test('never below zero', () => {
  const ui = mount(<Cart items={TICKETS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
