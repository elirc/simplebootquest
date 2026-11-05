const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 202, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 80, stars: 1, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 199, stars: 4, city: "Lisbon", breakfast: true}
];
const search = vi.fn(async (q) => HOTELS.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<HotelSearch search={search} />);
  ui.type('input', '  no ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Northern Star"]);
  expect(search).toHaveBeenCalledWith('no');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<HotelSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<HotelSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
