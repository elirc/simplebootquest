const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];
const byId = (id) => HOTELS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<HotelDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Maple House"));
  expect(ui.text()).toContain("star rating: 1");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<HotelDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<HotelDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Sea Breeze"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<HotelDetail id={1} load={load} />);
  ui.rerender(<HotelDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Old Mill"));
});
