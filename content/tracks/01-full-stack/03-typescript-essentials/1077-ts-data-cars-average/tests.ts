const CARS = [
  {id: 1, model: "Prius", priceK: 25, km: 153445, year: 2015, fuel: "hybrid"},
  {id: 2, model: "Model 3", priceK: 51, km: 101239, year: 2021, fuel: "electric"},
  {id: 3, model: "Mustang", priceK: 55, km: 46146, year: 2017, fuel: "electric"},
  {id: 4, model: "Polo", priceK: 46, km: 11001, year: 2022, fuel: "petrol"},
  {id: 5, model: "Fiesta", priceK: 51, km: 137010, year: 2013, fuel: "hybrid"},
  {id: 6, model: "Mazda3", priceK: 33, km: 54698, year: 2021, fuel: "diesel"},
  {id: 7, model: "Clio", priceK: 33, km: 18846, year: 2022, fuel: "petrol"},
  {id: 8, model: "Civic", priceK: 40, km: 64239, year: 2024, fuel: "diesel"}
];

test("an empty list", () => {
  expect(averageYear([])).toEqual(null);
});

test("all cars", () => {
  expect(averageYear(CARS)).toEqual(2019.4);
});
