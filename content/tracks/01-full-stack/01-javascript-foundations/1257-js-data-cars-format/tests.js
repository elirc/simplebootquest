const CARS = [
  {id: 1, model: "Corolla", priceK: 35, km: 161265, year: 2010, fuel: "diesel"},
  {id: 2, model: "Golf", priceK: 19, km: 117282, year: 2016, fuel: "petrol"},
  {id: 3, model: "Civic", priceK: 18, km: 35089, year: 2020, fuel: "petrol"},
  {id: 4, model: "Prius", priceK: 54, km: 72858, year: 2023, fuel: "hybrid"},
  {id: 5, model: "Polo", priceK: 55, km: 131810, year: 2023, fuel: "petrol"},
  {id: 6, model: "Mustang", priceK: 18, km: 28961, year: 2015, fuel: "diesel"},
  {id: 7, model: "Clio", priceK: 27, km: 21695, year: 2010, fuel: "petrol"},
  {id: 8, model: "Leaf", priceK: 24, km: 28594, year: 2016, fuel: "electric"}
];

test("an empty list", () => {
  expect(describeCars([])).toEqual([]);
});

test("all cars", () => {
  expect(describeCars(CARS)).toEqual(["Corolla (2010)","Golf (2016)","Civic (2020)","Prius (2023)","Polo (2023)","Mustang (2015)","Clio (2010)","Leaf (2016)"]);
});
