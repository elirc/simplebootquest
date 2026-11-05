const CARS = [
  {id: 1, model: "Prius", priceK: 39, km: 48215, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mazda3", priceK: 26, km: 95313, year: 2012, fuel: "hybrid"},
  {id: 3, model: "Clio", priceK: 49, km: 3486, year: 2011, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 38, km: 87825, year: 2022, fuel: "petrol"},
  {id: 5, model: "Fiesta", priceK: 15, km: 97530, year: 2010, fuel: "diesel"},
  {id: 6, model: "Model 3", priceK: 45, km: 160129, year: 2013, fuel: "diesel"},
  {id: 7, model: "Corolla", priceK: 40, km: 97609, year: 2016, fuel: "diesel"},
  {id: 8, model: "Golf", priceK: 31, km: 91225, year: 2011, fuel: "electric"}
];

test("an empty list", () => {
  expect(summariseCars([])).toEqual([]);
});

test("all cars", () => {
  expect(summariseCars(CARS)).toEqual([{"id":1,"model":"Prius","priceK":39},{"id":2,"model":"Mazda3","priceK":26},{"id":3,"model":"Clio","priceK":49},{"id":4,"model":"Ioniq","priceK":38},{"id":5,"model":"Fiesta","priceK":15},{"id":6,"model":"Model 3","priceK":45},{"id":7,"model":"Corolla","priceK":40},{"id":8,"model":"Golf","priceK":31}]);
});
