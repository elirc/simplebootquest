const CARS = [
  {id: 1, model: "Polo", priceK: 18, km: 11280, year: 2009, fuel: "petrol"},
  {id: 2, model: "Fiesta", priceK: 47, km: 25383, year: 2011, fuel: "electric"},
  {id: 3, model: "Golf", priceK: 41, km: 46113, year: 2013, fuel: "hybrid"},
  {id: 4, model: "Mustang", priceK: 15, km: 179871, year: 2016, fuel: "electric"},
  {id: 5, model: "Prius", priceK: 41, km: 16568, year: 2019, fuel: "hybrid"},
  {id: 6, model: "Leaf", priceK: 30, km: 171262, year: 2014, fuel: "petrol"},
  {id: 7, model: "Corolla", priceK: 50, km: 128253, year: 2018, fuel: "electric"},
  {id: 8, model: "Clio", priceK: 18, km: 168676, year: 2009, fuel: "diesel"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  bumpYear(CARS, "petrol", 10);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("with \"petrol\", 10", () => {
  expect(bumpYear(CARS, "petrol", 10)).toEqual([{"id":1,"model":"Polo","priceK":18,"km":11280,"year":2019,"fuel":"petrol"},{"id":2,"model":"Fiesta","priceK":47,"km":25383,"year":2011,"fuel":"electric"},{"id":3,"model":"Golf","priceK":41,"km":46113,"year":2013,"fuel":"hybrid"},{"id":4,"model":"Mustang","priceK":15,"km":179871,"year":2016,"fuel":"electric"},{"id":5,"model":"Prius","priceK":41,"km":16568,"year":2019,"fuel":"hybrid"},{"id":6,"model":"Leaf","priceK":30,"km":171262,"year":2024,"fuel":"petrol"},{"id":7,"model":"Corolla","priceK":50,"km":128253,"year":2018,"fuel":"electric"},{"id":8,"model":"Clio","priceK":18,"km":168676,"year":2009,"fuel":"diesel"}]);
});

test("with \"diesel\", 1", () => {
  expect(bumpYear(CARS, "diesel", 1)).toEqual([{"id":1,"model":"Polo","priceK":18,"km":11280,"year":2009,"fuel":"petrol"},{"id":2,"model":"Fiesta","priceK":47,"km":25383,"year":2011,"fuel":"electric"},{"id":3,"model":"Golf","priceK":41,"km":46113,"year":2013,"fuel":"hybrid"},{"id":4,"model":"Mustang","priceK":15,"km":179871,"year":2016,"fuel":"electric"},{"id":5,"model":"Prius","priceK":41,"km":16568,"year":2019,"fuel":"hybrid"},{"id":6,"model":"Leaf","priceK":30,"km":171262,"year":2014,"fuel":"petrol"},{"id":7,"model":"Corolla","priceK":50,"km":128253,"year":2018,"fuel":"electric"},{"id":8,"model":"Clio","priceK":18,"km":168676,"year":2010,"fuel":"diesel"}]);
});
