const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 126, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 71, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Bug in export", ageHours: 171, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Email change", ageHours: 9, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 97, replies: 8, priority: "normal", channel: "phone", resolved: false}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<TicketManager initial={TICKETS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Dark mode","Bug in export","Email change","Refund request"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<TicketManager initial={TICKETS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Dark mode","Missing order","Bug in export","Email change","Refund request"]);
});
