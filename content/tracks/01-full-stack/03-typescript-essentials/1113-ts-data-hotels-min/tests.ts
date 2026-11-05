const HOTELS = [
  {id: 1, name: "Pine Lodge", nightlyPrice: 229, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 103, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 256, stars: 3, city: "Kyoto", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 211, stars: 2, city: "Lisbon", breakfast: false},
  {id: 5, name: "Olive Court", nightlyPrice: 255, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 71, stars: 3, city: "Kyoto", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 129, stars: 3, city: "Toronto", breakfast: false},
  {id: 8, name: "Maple House", nightlyPrice: 223, stars: 1, city: "Lisbon", breakfast: false}
];

test("an empty list", () => {
  expect(lowestNightlyPrice([])).toEqual(null);
});

test("all hotels", () => {
  expect(lowestNightlyPrice(HOTELS)).toEqual("Old Mill");
});
