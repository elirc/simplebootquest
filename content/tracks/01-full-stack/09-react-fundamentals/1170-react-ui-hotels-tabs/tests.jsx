const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];

test('one tab per city', () => {
  const ui = mount(<HotelTabs items={HOTELS} />);
  expect(ui.findAll('button').map(text)).toEqual(["Lisbon","Kyoto","Toronto"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Cityloft","Riverside Inn"]);
});

test('switching tabs', () => {
  const ui = mount(<HotelTabs items={HOTELS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Harbour View","The Grand"]);
});
