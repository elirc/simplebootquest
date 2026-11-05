const CARS = [
  {id: 1, model: "Leaf", priceK: 19, km: 105524, year: 2023, fuel: "electric"},
  {id: 2, model: "Fiesta", priceK: 49, km: 125565, year: 2020, fuel: "electric"},
  {id: 3, model: "Mazda3", priceK: 19, km: 1945, year: 2015, fuel: "diesel"},
  {id: 4, model: "Model 3", priceK: 51, km: 168123, year: 2011, fuel: "diesel"},
  {id: 5, model: "Clio", priceK: 40, km: 31379, year: 2018, fuel: "hybrid"},
  {id: 6, model: "Polo", priceK: 23, km: 6266, year: 2018, fuel: "electric"},
  {id: 7, model: "Prius", priceK: 22, km: 10269, year: 2009, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 47, km: 148901, year: 2018, fuel: "petrol"}
];

test("an empty list", () => {
  expect(totalYear([])).toEqual(0);
});

test("all cars", () => {
  expect(totalYear(CARS)).toEqual(16132);
});
