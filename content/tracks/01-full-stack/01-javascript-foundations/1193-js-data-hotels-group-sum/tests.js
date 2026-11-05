const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 239, stars: 1, city: "Lisbon", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 175, stars: 1, city: "Lisbon", breakfast: true},
  {id: 3, name: "Station Hotel", nightlyPrice: 50, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Old Mill", nightlyPrice: 391, stars: 2, city: "Lisbon", breakfast: true},
  {id: 5, name: "Olive Court", nightlyPrice: 76, stars: 4, city: "Toronto", breakfast: true},
  {id: 6, name: "Sea Breeze", nightlyPrice: 203, stars: 2, city: "Lisbon", breakfast: false},
  {id: 7, name: "Sky Garden", nightlyPrice: 165, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 116, stars: 3, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(starsPerCity([])).toEqual({});
});

test("all hotels", () => {
  expect(starsPerCity(HOTELS)).toEqual({"Lisbon":9,"Toronto":4,"Kyoto":7});
});
