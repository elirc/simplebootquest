const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 313, stars: 2, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 227, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 70, stars: 4, city: "Lisbon", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 273, stars: 2, city: "Lisbon", breakfast: true},
  {id: 5, name: "Sky Garden", nightlyPrice: 158, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 202, stars: 2, city: "Lisbon", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 282, stars: 2, city: "Toronto", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 70, stars: 3, city: "Kyoto", breakfast: true}
];

test("an empty list", () => {
  expect(lowestNightlyPrice([])).toEqual(null);
});

test("all hotels", () => {
  expect(lowestNightlyPrice(HOTELS)).toEqual("Pine Lodge");
});
