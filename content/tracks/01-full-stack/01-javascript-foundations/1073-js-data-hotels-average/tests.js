const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 110, stars: 3, city: "Toronto", breakfast: true},
  {id: 2, name: "Harbour View", nightlyPrice: 136, stars: 3, city: "Kyoto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 331, stars: 4, city: "Lisbon", breakfast: false},
  {id: 4, name: "Riverside Inn", nightlyPrice: 301, stars: 3, city: "Lisbon", breakfast: true},
  {id: 5, name: "Station Hotel", nightlyPrice: 388, stars: 1, city: "Lisbon", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 148, stars: 2, city: "Kyoto", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 244, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Sea Breeze", nightlyPrice: 265, stars: 1, city: "Lisbon", breakfast: true}
];

test("an empty list", () => {
  expect(averageNightlyPrice([])).toEqual(null);
});

test("all hotels", () => {
  expect(averageNightlyPrice(HOTELS)).toEqual(240.4);
});
