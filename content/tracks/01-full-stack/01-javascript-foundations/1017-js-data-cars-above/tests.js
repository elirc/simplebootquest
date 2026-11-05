const CARS = [
  {id: 1, model: "Prius", priceK: 28, km: 23731, year: 2017, fuel: "petrol"},
  {id: 2, model: "Ioniq", priceK: 51, km: 174621, year: 2012, fuel: "petrol"},
  {id: 3, model: "Golf", priceK: 22, km: 24894, year: 2009, fuel: "diesel"},
  {id: 4, model: "Mustang", priceK: 47, km: 154872, year: 2009, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 48, km: 9193, year: 2009, fuel: "hybrid"},
  {id: 6, model: "Polo", priceK: 38, km: 135018, year: 2014, fuel: "hybrid"},
  {id: 7, model: "Mazda3", priceK: 32, km: 137835, year: 2022, fuel: "electric"},
  {id: 8, model: "Leaf", priceK: 24, km: 92724, year: 2020, fuel: "diesel"}
];

test("with 24894", () => {
  expect(carsAbove(CARS, 24894)).toEqual(["Ioniq","Mustang","Polo","Mazda3","Leaf"]);
});

test("with 135018", () => {
  expect(carsAbove(CARS, 135018)).toEqual(["Ioniq","Mustang","Mazda3"]);
});

test("with 999999", () => {
  expect(carsAbove(CARS, 999999)).toEqual([]);
});
