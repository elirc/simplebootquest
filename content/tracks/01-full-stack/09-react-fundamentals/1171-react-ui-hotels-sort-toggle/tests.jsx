const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];

test('ascending first', () => {
  const ui = mount(<HotelSorter items={HOTELS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Pine Lodge","The Grand","Riverside Inn","Maple House","Cityloft","Harbour View"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<HotelSorter items={HOTELS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Harbour View","Cityloft","Maple House","Riverside Inn","The Grand","Pine Lodge"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(HOTELS);
  const ui = mount(<HotelSorter items={HOTELS} />);
  ui.click('button');
  expect(JSON.stringify(HOTELS)).toBe(before);
});
