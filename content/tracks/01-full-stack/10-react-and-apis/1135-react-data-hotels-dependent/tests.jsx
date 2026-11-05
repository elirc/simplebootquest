const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? HOTELS.slice(0, 1) : HOTELS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<HotelBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Maple House","Sea Breeze","Old Mill","The Grand"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
