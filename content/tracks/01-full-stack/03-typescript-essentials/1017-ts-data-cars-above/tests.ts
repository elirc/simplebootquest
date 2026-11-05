const CARS = [
  {id: 1, model: "Clio", priceK: 53, km: 30152, year: 2024, fuel: "petrol"},
  {id: 2, model: "Fiesta", priceK: 24, km: 71935, year: 2021, fuel: "hybrid"},
  {id: 3, model: "Ioniq", priceK: 45, km: 45817, year: 2019, fuel: "electric"},
  {id: 4, model: "Mazda3", priceK: 43, km: 133031, year: 2018, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 24, km: 71972, year: 2022, fuel: "electric"},
  {id: 6, model: "Model 3", priceK: 54, km: 141830, year: 2024, fuel: "petrol"},
  {id: 7, model: "Mustang", priceK: 50, km: 19829, year: 2009, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 42, km: 29167, year: 2012, fuel: "diesel"}
];

test("with 42", () => {
  expect(carsAbove(CARS, 42)).toEqual(["Clio","Ioniq","Mazda3","Model 3","Mustang"]);
});

test("with 45", () => {
  expect(carsAbove(CARS, 45)).toEqual(["Clio","Model 3","Mustang"]);
});

test("with 999999", () => {
  expect(carsAbove(CARS, 999999)).toEqual([]);
});
