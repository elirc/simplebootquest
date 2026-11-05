const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 136, stars: 5, city: "Toronto", breakfast: true},
  {id: 2, name: "Riverside Inn", nightlyPrice: 348, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 110, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Old Mill", nightlyPrice: 148, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 358, stars: 4, city: "Kyoto", breakfast: false},
  {id: 7, name: "Maple House", nightlyPrice: 196, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 114, stars: 4, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(summariseHotels([])).toEqual([]);
});

test("all hotels", () => {
  expect(summariseHotels(HOTELS)).toEqual([{"id":1,"name":"Olive Court","stars":5},{"id":2,"name":"Riverside Inn","stars":3},{"id":3,"name":"Sea Breeze","stars":3},{"id":4,"name":"Northern Star","stars":2},{"id":5,"name":"Old Mill","stars":2},{"id":6,"name":"Sky Garden","stars":4},{"id":7,"name":"Maple House","stars":3},{"id":8,"name":"Pine Lodge","stars":4}]);
});
