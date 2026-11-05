const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];

test('first page', () => {
  const ui = mount(<HotelPager items={HOTELS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Cityloft","Pine Lodge"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<HotelPager items={HOTELS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Riverside Inn","The Grand"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
