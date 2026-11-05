const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 126, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 71, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Bug in export", ageHours: 171, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Email change", ageHours: 9, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 97, replies: 8, priority: "normal", channel: "phone", resolved: false}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(TICKETS.filter((x) => x.subject.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveTicketSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "da");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Dark mode"]));
  expect(signals[1].aborted).toBe(true);
});
