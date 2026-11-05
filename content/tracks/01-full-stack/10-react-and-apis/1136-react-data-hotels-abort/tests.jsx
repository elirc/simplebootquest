const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(HOTELS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveHotelSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "no");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Northern Star"]));
  expect(signals[1].aborted).toBe(true);
});
