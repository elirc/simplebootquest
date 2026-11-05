const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 94, stars: 2, city: "Toronto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 186, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "The Grand", nightlyPrice: 246, stars: 2, city: "Lisbon", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 396, stars: 3, city: "Lisbon", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 189, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 59, stars: 3, city: "Lisbon", breakfast: true},
  {id: 7, name: "Pine Lodge", nightlyPrice: 74, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 263, stars: 3, city: "Lisbon", breakfast: true}
];

test("an empty list", () => {
  expect(summariseHotels([])).toEqual([]);
});

test("all hotels", () => {
  expect(summariseHotels(HOTELS)).toEqual([{"id":1,"name":"Northern Star","stars":2},{"id":2,"name":"Cityloft","stars":2},{"id":3,"name":"The Grand","stars":2},{"id":4,"name":"Station Hotel","stars":3},{"id":5,"name":"Sea Breeze","stars":4},{"id":6,"name":"Maple House","stars":3},{"id":7,"name":"Pine Lodge","stars":3},{"id":8,"name":"Riverside Inn","stars":3}]);
});
