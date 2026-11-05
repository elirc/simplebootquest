const CARS = [
  {id: 1, model: "Leaf", priceK: 29, km: 82299, year: 2008, fuel: "hybrid"},
  {id: 2, model: "Golf", priceK: 33, km: 88369, year: 2012, fuel: "hybrid"},
  {id: 3, model: "Mustang", priceK: 48, km: 44897, year: 2009, fuel: "electric"},
  {id: 4, model: "Mazda3", priceK: 47, km: 98835, year: 2015, fuel: "hybrid"},
  {id: 5, model: "Fiesta", priceK: 55, km: 120121, year: 2008, fuel: "electric"},
  {id: 6, model: "Prius", priceK: 36, km: 128498, year: 2012, fuel: "hybrid"},
  {id: 7, model: "Ioniq", priceK: 50, km: 166557, year: 2021, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 31, km: 111306, year: 2010, fuel: "hybrid"}
];

test("with \"petrol\"", () => {
  expect(carsInFuelRanked(CARS, "petrol")).toEqual([]);
});

test("with \"diesel\"", () => {
  expect(carsInFuelRanked(CARS, "diesel")).toEqual(["Ioniq"]);
});

test("with \"electric\"", () => {
  expect(carsInFuelRanked(CARS, "electric")).toEqual(["Fiesta","Mustang"]);
});
