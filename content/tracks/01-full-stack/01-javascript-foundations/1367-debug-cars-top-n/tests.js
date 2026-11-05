const CARS = [
  {id: 1, model: "Prius", priceK: 48, km: 108452, year: 2008, fuel: "hybrid"},
  {id: 2, model: "Civic", priceK: 35, km: 154052, year: 2016, fuel: "hybrid"},
  {id: 3, model: "Mazda3", priceK: 26, km: 43702, year: 2016, fuel: "diesel"},
  {id: 4, model: "Leaf", priceK: 57, km: 59796, year: 2019, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 20, km: 56436, year: 2024, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 15, km: 3441, year: 2021, fuel: "petrol"},
  {id: 7, model: "Mustang", priceK: 16, km: 83257, year: 2017, fuel: "diesel"},
  {id: 8, model: "Model 3", priceK: 15, km: 145099, year: 2009, fuel: "electric"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  topCarsByYear(CARS, 1);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("with 1", () => {
  expect(topCarsByYear(CARS, 1)).toEqual(["Corolla"]);
});

test("with 3", () => {
  expect(topCarsByYear(CARS, 3)).toEqual(["Corolla","Golf","Leaf"]);
});

test("with 0", () => {
  expect(topCarsByYear(CARS, 0)).toEqual([]);
});
