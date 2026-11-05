const HOTELS = [
  {id: 1, name: "The Grand", nightlyPrice: 362, stars: 5, city: "Lisbon", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 275, stars: 4, city: "Toronto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 132, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 297, stars: 2, city: "Lisbon", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 301, stars: 4, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 120, stars: 1, city: "Toronto", breakfast: true},
  {id: 7, name: "Station Hotel", nightlyPrice: 113, stars: 2, city: "Toronto", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 66, stars: 1, city: "Toronto", breakfast: false}
];

test("with 1, 3", () => {
  expect(pageOfHotels(HOTELS, 1, 3)).toEqual({"items":["The Grand","Northern Star","Pine Lodge"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfHotels(HOTELS, 2, 3)).toEqual({"items":["Sea Breeze","Harbour View","Maple House"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfHotels(HOTELS, 3, 3)).toEqual({"items":["Station Hotel","Riverside Inn"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfHotels(HOTELS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
