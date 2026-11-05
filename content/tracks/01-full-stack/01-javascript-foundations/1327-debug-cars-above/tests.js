const CARS = [
  {id: 1, model: "Golf", priceK: 34, km: 140483, year: 2013, fuel: "diesel"},
  {id: 2, model: "Mazda3", priceK: 31, km: 124527, year: 2023, fuel: "petrol"},
  {id: 3, model: "Polo", priceK: 18, km: 88693, year: 2009, fuel: "petrol"},
  {id: 4, model: "Model 3", priceK: 29, km: 6472, year: 2013, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 56, km: 70280, year: 2021, fuel: "electric"},
  {id: 6, model: "Mustang", priceK: 42, km: 66374, year: 2015, fuel: "diesel"},
  {id: 7, model: "Civic", priceK: 24, km: 124346, year: 2015, fuel: "petrol"},
  {id: 8, model: "Prius", priceK: 27, km: 118995, year: 2010, fuel: "diesel"}
];

test("with 2013", () => {
  expect(carsAbove(CARS, 2013)).toEqual(["Mazda3","Clio","Mustang","Civic"]);
});

test("with 2015", () => {
  expect(carsAbove(CARS, 2015)).toEqual(["Mazda3","Clio"]);
});

test("with 999999", () => {
  expect(carsAbove(CARS, 999999)).toEqual([]);
});
