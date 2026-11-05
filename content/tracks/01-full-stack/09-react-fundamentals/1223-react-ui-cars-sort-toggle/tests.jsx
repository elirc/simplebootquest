const CARS = [
  {id: 1, model: "Fiesta", priceK: 57, km: 99361, year: 2010, fuel: "electric"},
  {id: 2, model: "Polo", priceK: 28, km: 117940, year: 2017, fuel: "diesel"},
  {id: 3, model: "Model 3", priceK: 26, km: 62546, year: 2012, fuel: "petrol"},
  {id: 4, model: "Civic", priceK: 51, km: 35998, year: 2018, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 32, km: 172195, year: 2017, fuel: "petrol"},
  {id: 6, model: "Leaf", priceK: 32, km: 91964, year: 2020, fuel: "diesel"}
];

test('ascending first', () => {
  const ui = mount(<CarSorter items={CARS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Civic","Model 3","Leaf","Fiesta","Polo","Clio"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<CarSorter items={CARS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Clio","Polo","Fiesta","Leaf","Model 3","Civic"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(CARS);
  const ui = mount(<CarSorter items={CARS} />);
  ui.click('button');
  expect(JSON.stringify(CARS)).toBe(before);
});
