const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 235, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 179, stars: 5, city: "Lisbon", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 161, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 97, stars: 4, city: "Kyoto", breakfast: false},
  {id: 5, name: "Old Mill", nightlyPrice: 373, stars: 3, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 165, stars: 4, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 61, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sea Breeze", nightlyPrice: 67, stars: 3, city: "Toronto", breakfast: false}
];

test("an empty list", () => {
  expect(percentBreakfast([])).toEqual(0);
});

test("all hotels", () => {
  expect(percentBreakfast(HOTELS)).toEqual(38);
});
