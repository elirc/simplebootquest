const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 387, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Pine Lodge", nightlyPrice: 414, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 56, stars: 4, city: "Toronto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 199, stars: 5, city: "Kyoto", breakfast: true},
  {id: 5, name: "Sea Breeze", nightlyPrice: 51, stars: 1, city: "Toronto", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 98, stars: 4, city: "Kyoto", breakfast: true},
  {id: 7, name: "Harbour View", nightlyPrice: 162, stars: 5, city: "Toronto", breakfast: false},
  {id: 8, name: "Northern Star", nightlyPrice: 386, stars: 4, city: "Toronto", breakfast: false}
];

test("with \"Lisbon\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Lisbon")).toEqual([]);
});

test("with \"Kyoto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Kyoto")).toEqual(["Pine Lodge","Sky Garden","Olive Court","Maple House"]);
});

test("with \"Toronto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Toronto")).toEqual(["Northern Star","Harbour View","Old Mill","Sea Breeze"]);
});
