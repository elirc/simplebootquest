const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];

test('starts hidden', () => {
  const ui = mount(<HotelToggle items={HOTELS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show hotels');
});

test('shows and hides', () => {
  const ui = mount(<HotelToggle items={HOTELS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Cityloft","Pine Lodge","Harbour View","Maple House","Riverside Inn","The Grand"]);
  expect(text(ui.find('button'))).toBe('Hide hotels');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
