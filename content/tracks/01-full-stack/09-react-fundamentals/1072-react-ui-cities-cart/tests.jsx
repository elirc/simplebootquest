const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={CITIES} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={CITIES} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 26');
});

test('never below zero', () => {
  const ui = mount(<Cart items={CITIES} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
