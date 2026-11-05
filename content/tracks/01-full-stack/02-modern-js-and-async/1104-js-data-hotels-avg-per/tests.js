const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 68, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 310, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Maple House", nightlyPrice: 240, stars: 1, city: "Toronto", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 127, stars: 4, city: "Toronto", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 209, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 163, stars: 5, city: "Toronto", breakfast: true},
  {id: 7, name: "Old Mill", nightlyPrice: 252, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 115, stars: 5, city: "Lisbon", breakfast: true}
];

test("an empty list", () => {
  expect(averageStarsPerCity([])).toEqual({});
});

test("all hotels", () => {
  expect(averageStarsPerCity(HOTELS)).toEqual({"Kyoto":3,"Lisbon":3,"Toronto":3});
});
