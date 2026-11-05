const CARS = [
  {id: 1, model: "Mustang", priceK: 55, km: 22070, year: 2019, fuel: "electric"},
  {id: 2, model: "Civic", priceK: 40, km: 101316, year: 2021, fuel: "hybrid"},
  {id: 3, model: "Ioniq", priceK: 34, km: 21994, year: 2019, fuel: "diesel"},
  {id: 4, model: "Clio", priceK: 53, km: 44031, year: 2015, fuel: "electric"},
  {id: 5, model: "Fiesta", priceK: 51, km: 62714, year: 2022, fuel: "diesel"},
  {id: 6, model: "Model 3", priceK: 15, km: 131375, year: 2021, fuel: "diesel"},
  {id: 7, model: "Mazda3", priceK: 50, km: 24791, year: 2017, fuel: "hybrid"},
  {id: 8, model: "Polo", priceK: 25, km: 65172, year: 2016, fuel: "hybrid"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  topCarsByYear(CARS, 1);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("with 1", () => {
  expect(topCarsByYear(CARS, 1)).toEqual(["Fiesta"]);
});

test("with 3", () => {
  expect(topCarsByYear(CARS, 3)).toEqual(["Fiesta","Civic","Model 3"]);
});

test("with 0", () => {
  expect(topCarsByYear(CARS, 0)).toEqual([]);
});
