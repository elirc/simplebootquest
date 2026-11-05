const EVENTS = [
  {id: 1, name: "Workshop", capacity: 39, registered: 249, format: "hybrid", free: true},
  {id: 2, name: "Hackathon", capacity: 279, registered: 154, format: "hybrid", free: false},
  {id: 3, name: "Code Dojo", capacity: 291, registered: 10, format: "hybrid", free: true},
  {id: 4, name: "Demo Day", capacity: 391, registered: 370, format: "in-person", free: false},
  {id: 5, name: "JS Meetup", capacity: 149, registered: 7, format: "in-person", free: true},
  {id: 6, name: "Book Club", capacity: 98, registered: 169, format: "hybrid", free: false}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={EVENTS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={EVENTS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 357');
});

test('never below zero', () => {
  const ui = mount(<Cart items={EVENTS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
