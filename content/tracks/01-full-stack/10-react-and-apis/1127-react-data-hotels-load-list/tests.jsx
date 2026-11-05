const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];

test('loading then data', async () => {
  const load = vi.fn(async () => HOTELS);
  const ui = mount(<HotelList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Northern Star","Maple House","Sea Breeze","Old Mill","The Grand"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return HOTELS;
  });
  const ui = mount(<HotelList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
