test("with \"Lisbon\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Lisbon")).toEqual(["Riverside Inn","Maple House"]);
});

test("with \"Kyoto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Kyoto")).toEqual(["Pine Lodge","Harbour View","Cityloft"]);
});

test("with \"Toronto\"", () => {
  expect(hotelsInCityRanked(HOTELS, "Toronto")).toEqual(["Station Hotel","Sea Breeze","The Grand"]);
});
