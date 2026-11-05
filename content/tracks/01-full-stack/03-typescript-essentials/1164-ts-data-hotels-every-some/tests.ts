const HOTELS = [
  {id: 1, name: "The Grand", nightlyPrice: 230, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "Station Hotel", nightlyPrice: 410, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 226, stars: 2, city: "Lisbon", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 134, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Maple House", nightlyPrice: 396, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 378, stars: 3, city: "Kyoto", breakfast: false},
  {id: 7, name: "Sea Breeze", nightlyPrice: 296, stars: 5, city: "Kyoto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 151, stars: 5, city: "Kyoto", breakfast: false}
];

test("with 3", () => {
  expect(allHotelsUnder(HOTELS, 3)).toEqual(false);
});

test("with 6", () => {
  expect(allHotelsUnder(HOTELS, 6)).toEqual(true);
});

test("with 5", () => {
  expect(allHotelsUnder(HOTELS, 5)).toEqual(false);
});
