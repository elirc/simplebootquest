const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 20, heightCm: 154, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 10, heightCm: 129, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 56, light: "medium", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 20, heightCm: 157, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 4, heightCm: 74, light: "bright", petSafe: false}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={PLANTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={PLANTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 50');
});

test('never below zero', () => {
  const ui = mount(<Cart items={PLANTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
