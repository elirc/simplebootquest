const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Kyoto", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 46, stars: 3, city: "Toronto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 93, stars: 4, city: "Toronto", breakfast: false},
  {id: 4, name: "Old Mill", nightlyPrice: 256, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 331, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 316, stars: 1, city: "Toronto", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 122, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 269, stars: 2, city: "Lisbon", breakfast: false}
];

test("with \"Lisbon\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Lisbon")).toEqual(["Harbour View","Old Mill","Cityloft"]);
});

test("with \"Kyoto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Kyoto")).toEqual(["The Grand","Sky Garden"]);
});

test("with \"Toronto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Toronto")).toEqual(["Northern Star","Pine Lodge","Station Hotel"]);
});
