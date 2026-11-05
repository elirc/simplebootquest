const CARS = [
  {id: 1, model: "Mazda3", priceK: 26, km: 26024, year: 2016, fuel: "hybrid"},
  {id: 2, model: "Leaf", priceK: 52, km: 179802, year: 2018, fuel: "diesel"},
  {id: 3, model: "Model 3", priceK: 32, km: 78383, year: 2014, fuel: "petrol"},
  {id: 4, model: "Mustang", priceK: 29, km: 165378, year: 2022, fuel: "diesel"},
  {id: 5, model: "Corolla", priceK: 36, km: 42637, year: 2011, fuel: "electric"},
  {id: 6, model: "Civic", priceK: 46, km: 85294, year: 2010, fuel: "diesel"},
  {id: 7, model: "Prius", priceK: 22, km: 84982, year: 2023, fuel: "diesel"},
  {id: 8, model: "Golf", priceK: 45, km: 62960, year: 2015, fuel: "diesel"}
];

test("with 2014", () => {
  expect(allCarsUnder(CARS, 2014)).toEqual(false);
});

test("with 2024", () => {
  expect(allCarsUnder(CARS, 2024)).toEqual(true);
});

test("with 2023", () => {
  expect(allCarsUnder(CARS, 2023)).toEqual(false);
});
