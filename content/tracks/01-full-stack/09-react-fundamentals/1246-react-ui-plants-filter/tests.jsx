const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 20, heightCm: 154, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 10, heightCm: 129, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 56, light: "medium", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 20, heightCm: 157, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 4, heightCm: 74, light: "bright", petSafe: false}
];

test('shows everything at first', () => {
  const ui = mount(<PlantFilter items={PLANTS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<PlantFilter items={PLANTS} />);
  ui.type('input', "MO");
  expect(ui.findAll('li').map(text)).toEqual(["Monstera"]);
});

test('empty state', () => {
  const ui = mount(<PlantFilter items={PLANTS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
