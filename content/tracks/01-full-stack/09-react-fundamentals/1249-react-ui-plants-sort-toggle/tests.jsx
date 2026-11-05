const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 20, heightCm: 154, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 10, heightCm: 129, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 56, light: "medium", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 20, heightCm: 157, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 4, heightCm: 74, light: "bright", petSafe: false}
];

test('ascending first', () => {
  const ui = mount(<PlantSorter items={PLANTS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Mint","Monstera","Orchid","Basil","Fern","Snake Plant"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<PlantSorter items={PLANTS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Fern","Snake Plant","Basil","Orchid","Monstera","Mint"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(PLANTS);
  const ui = mount(<PlantSorter items={PLANTS} />);
  ui.click('button');
  expect(JSON.stringify(PLANTS)).toBe(before);
});
