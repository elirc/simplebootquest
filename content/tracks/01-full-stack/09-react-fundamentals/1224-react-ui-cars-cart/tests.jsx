const CARS = [
  {id: 1, model: "Fiesta", priceK: 57, km: 99361, year: 2010, fuel: "electric"},
  {id: 2, model: "Polo", priceK: 28, km: 117940, year: 2017, fuel: "diesel"},
  {id: 3, model: "Model 3", priceK: 26, km: 62546, year: 2012, fuel: "petrol"},
  {id: 4, model: "Civic", priceK: 51, km: 35998, year: 2018, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 32, km: 172195, year: 2017, fuel: "petrol"},
  {id: 6, model: "Leaf", priceK: 32, km: 91964, year: 2020, fuel: "diesel"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={CARS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={CARS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 316662');
});

test('never below zero', () => {
  const ui = mount(<Cart items={CARS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
