const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 272, stars: 2, city: "Kyoto", breakfast: true},
  {id: 2, name: "Maple House", nightlyPrice: 86, stars: 2, city: "Kyoto", breakfast: false},
  {id: 3, name: "Station Hotel", nightlyPrice: 96, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 139, stars: 5, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 234, stars: 3, city: "Lisbon", breakfast: false},
  {id: 7, name: "Sky Garden", nightlyPrice: 220, stars: 4, city: "Kyoto", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 391, stars: 2, city: "Toronto", breakfast: true}
];

test("an empty list", () => {
  expect(percentBreakfast([])).toEqual(0);
});

test("all hotels", () => {
  expect(percentBreakfast(HOTELS)).toEqual(50);
});
