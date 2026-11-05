const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 264, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 292, stars: 2, city: "Lisbon", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 178, stars: 3, city: "Toronto", breakfast: false},
  {id: 5, name: "Station Hotel", nightlyPrice: 389, stars: 1, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sea Breeze", nightlyPrice: 402, stars: 5, city: "Toronto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 136, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 108, stars: 1, city: "Kyoto", breakfast: true}
];

test("an empty list", () => {
  expect(totalNightlyPrice([])).toEqual(0);
});

test("all hotels", () => {
  expect(totalNightlyPrice(HOTELS)).toEqual(1958);
});
