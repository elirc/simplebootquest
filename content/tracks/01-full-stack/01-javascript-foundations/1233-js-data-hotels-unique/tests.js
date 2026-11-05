const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 288, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 405, stars: 2, city: "Kyoto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 319, stars: 4, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 299, stars: 1, city: "Toronto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 332, stars: 3, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 92, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "The Grand", nightlyPrice: 415, stars: 5, city: "Kyoto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 350, stars: 2, city: "Toronto", breakfast: false}
];

test("an empty list", () => {
  expect(distinctCitys([])).toEqual([]);
});

test("all hotels", () => {
  expect(distinctCitys(HOTELS)).toEqual(["Kyoto","Lisbon","Toronto"]);
});
