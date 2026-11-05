const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 390, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Pine Lodge", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Harbour View", nightlyPrice: 416, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 386, stars: 1, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 358, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 265, stars: 2, city: "Toronto", breakfast: true}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={HOTELS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={HOTELS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 867');
});

test('never below zero', () => {
  const ui = mount(<Cart items={HOTELS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
