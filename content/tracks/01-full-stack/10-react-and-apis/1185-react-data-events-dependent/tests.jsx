const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 99, registered: 376, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 112, registered: 376, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 122, registered: 251, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 247, registered: 221, format: "online", free: true},
  {id: 5, name: "Workshop", capacity: 357, registered: 8, format: "in-person", free: true}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? EVENTS.slice(0, 1) : EVENTS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<EventBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Book Club","Demo Day","Startup Night","Workshop"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
