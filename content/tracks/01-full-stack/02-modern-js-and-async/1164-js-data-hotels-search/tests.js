const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 144, stars: 2, city: "Toronto", breakfast: true},
  {id: 2, name: "Old Mill", nightlyPrice: 336, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Northern Star", nightlyPrice: 104, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 48, stars: 1, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 171, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 279, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 193, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 366, stars: 4, city: "Toronto", breakfast: false}
];

test("with \"ld\"", () => {
  expect(searchHotels(HOTELS, "ld")).toEqual(["Old Mill"]);
});

test("with \"LD\"", () => {
  expect(searchHotels(HOTELS, "LD")).toEqual(["Old Mill"]);
});

test("with \"  \"", () => {
  expect(searchHotels(HOTELS, "  ")).toEqual(["Sea Breeze","Old Mill","Northern Star","Olive Court","Cityloft","Maple House","Station Hotel","Pine Lodge"]);
});

test("with \"zzz\"", () => {
  expect(searchHotels(HOTELS, "zzz")).toEqual([]);
});
