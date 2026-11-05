const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 99, registered: 376, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 112, registered: 376, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 122, registered: 251, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 247, registered: 221, format: "online", free: true},
  {id: 5, name: "Workshop", capacity: 357, registered: 8, format: "in-person", free: true}
];
const loadPage = vi.fn(async (page) => ({ items: EVENTS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < EVENTS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<EventFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Hackathon","Book Club","Demo Day","Startup Night","Workshop"]));
  expect(ui.find('button')).toBeUndefined();
});
