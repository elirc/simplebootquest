const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];
const loadPage = vi.fn(async (page) => ({ items: HOTELS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < HOTELS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<HotelFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Northern Star","Maple House","Sea Breeze","Old Mill","The Grand"]));
  expect(ui.find('button')).toBeUndefined();
});
