const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 126, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 71, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Bug in export", ageHours: 171, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Email change", ageHours: 9, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 97, replies: 8, priority: "normal", channel: "phone", resolved: false}
];
const loadPage = vi.fn(async (page) => ({ items: TICKETS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < TICKETS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<TicketFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Dark mode","Missing order","Bug in export","Email change","Refund request"]));
  expect(ui.find('button')).toBeUndefined();
});
