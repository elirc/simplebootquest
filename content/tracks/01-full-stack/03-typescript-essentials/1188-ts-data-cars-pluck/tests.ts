const CARS = [
  {id: 1, model: "Ioniq", priceK: 42, km: 3762, year: 2013, fuel: "petrol"},
  {id: 2, model: "Mustang", priceK: 44, km: 134808, year: 2009, fuel: "diesel"},
  {id: 3, model: "Golf", priceK: 44, km: 83895, year: 2013, fuel: "electric"},
  {id: 4, model: "Fiesta", priceK: 18, km: 39414, year: 2015, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 34, km: 58652, year: 2014, fuel: "diesel"},
  {id: 6, model: "Clio", priceK: 16, km: 99581, year: 2009, fuel: "hybrid"},
  {id: 7, model: "Mazda3", priceK: 33, km: 111310, year: 2024, fuel: "diesel"},
  {id: 8, model: "Prius", priceK: 30, km: 50126, year: 2015, fuel: "hybrid"}
];

test("an empty list", () => {
  expect(summariseCars([])).toEqual([]);
});

test("all cars", () => {
  expect(summariseCars(CARS)).toEqual([{"id":1,"model":"Ioniq","km":3762},{"id":2,"model":"Mustang","km":134808},{"id":3,"model":"Golf","km":83895},{"id":4,"model":"Fiesta","km":39414},{"id":5,"model":"Corolla","km":58652},{"id":6,"model":"Clio","km":99581},{"id":7,"model":"Mazda3","km":111310},{"id":8,"model":"Prius","km":50126}]);
});
