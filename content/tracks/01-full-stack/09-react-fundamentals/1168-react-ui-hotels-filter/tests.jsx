const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];

test('shows everything at first', () => {
  const ui = mount(<HotelFilter items={HOTELS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<HotelFilter items={HOTELS} />);
  ui.type('input', "PI");
  expect(ui.findAll('li').map(text)).toEqual(["Pine Lodge"]);
});

test('empty state', () => {
  const ui = mount(<HotelFilter items={HOTELS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
