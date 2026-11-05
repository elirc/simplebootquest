const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 126, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 71, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Bug in export", ageHours: 171, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Email change", ageHours: 9, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 97, replies: 8, priority: "normal", channel: "phone", resolved: false}
];
const search = vi.fn(async (q) => TICKETS.filter((x) => x.subject.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<TicketSearch search={search} />);
  ui.type('input', '  da ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Dark mode"]);
  expect(search).toHaveBeenCalledWith('da');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<TicketSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<TicketSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
