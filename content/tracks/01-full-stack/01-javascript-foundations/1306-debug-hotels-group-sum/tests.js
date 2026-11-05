const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 245, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Maple House", nightlyPrice: 362, stars: 5, city: "Toronto", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 49, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 66, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 286, stars: 5, city: "Toronto", breakfast: false},
  {id: 6, name: "Harbour View", nightlyPrice: 171, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Sea Breeze", nightlyPrice: 45, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 391, stars: 3, city: "Kyoto", breakfast: true}
];

test("an empty list", () => {
  expect(starsPerCity([])).toEqual({});
});

test("all hotels", () => {
  expect(starsPerCity(HOTELS)).toEqual({"Lisbon":5,"Toronto":20,"Kyoto":5});
});
