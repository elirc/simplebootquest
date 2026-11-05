const CARS = [
  {id: 1, model: "Model 3", priceK: 42, km: 173531, year: 2023, fuel: "diesel"},
  {id: 2, model: "Clio", priceK: 49, km: 130104, year: 2019, fuel: "electric"},
  {id: 3, model: "Mustang", priceK: 47, km: 57808, year: 2018, fuel: "petrol"},
  {id: 4, model: "Leaf", priceK: 48, km: 102425, year: 2023, fuel: "electric"},
  {id: 5, model: "Fiesta", priceK: 45, km: 155417, year: 2017, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 24, km: 151518, year: 2019, fuel: "hybrid"},
  {id: 7, model: "Polo", priceK: 30, km: 166440, year: 2016, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 46, km: 61589, year: 2014, fuel: "electric"}
];

test("with 102425, 151518", () => {
  expect(carsInRange(CARS, 102425, 151518)).toEqual(["Clio","Leaf","Golf"]);
});

test("with 151518, 155417", () => {
  expect(carsInRange(CARS, 151518, 155417)).toEqual(["Fiesta","Golf"]);
});

test("with 102425, 102425", () => {
  expect(carsInRange(CARS, 102425, 102425)).toEqual(["Leaf"]);
});
