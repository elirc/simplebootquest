const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 20, heightCm: 154, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 10, heightCm: 129, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 56, light: "medium", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 20, heightCm: 157, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 4, heightCm: 74, light: "bright", petSafe: false}
];

test('one tab per light', () => {
  const ui = mount(<PlantTabs items={PLANTS} />);
  expect(ui.findAll('button').map(text)).toEqual(["low","bright","medium"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Fern","Monstera"]);
});

test('switching tabs', () => {
  const ui = mount(<PlantTabs items={PLANTS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Basil"]);
});
