const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 191, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Sea Breeze", nightlyPrice: 114, stars: 5, city: "Lisbon", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 194, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 114, stars: 3, city: "Toronto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 337, stars: 4, city: "Lisbon", breakfast: true},
  {id: 6, name: "Pine Lodge", nightlyPrice: 344, stars: 2, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 152, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 82, stars: 4, city: "Kyoto", breakfast: true}
];

test("with \"ar\"", () => {
  expect(searchHotels(HOTELS, "ar")).toEqual(["Harbour View","Sky Garden"]);
});

test("with \"AR\"", () => {
  expect(searchHotels(HOTELS, "AR")).toEqual(["Harbour View","Sky Garden"]);
});

test("with \"  \"", () => {
  expect(searchHotels(HOTELS, "  ")).toEqual(["Harbour View","Sea Breeze","Riverside Inn","Station Hotel","Maple House","Pine Lodge","The Grand","Sky Garden"]);
});

test("with \"zzz\"", () => {
  expect(searchHotels(HOTELS, "zzz")).toEqual([]);
});
