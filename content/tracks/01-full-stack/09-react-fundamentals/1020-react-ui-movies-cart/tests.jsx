const MOVIES = [
  {id: 1, title: "Night Train", year: 2019, minutes: 127, rating: 8.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 1982, minutes: 113, rating: 8.3, genre: "drama"},
  {id: 3, title: "Quiet Storm", year: 1996, minutes: 175, rating: 5.3, genre: "drama"},
  {id: 4, title: "Blue River", year: 2004, minutes: 109, rating: 6.2, genre: "drama"},
  {id: 5, title: "Cloud Atlas", year: 2000, minutes: 146, rating: 8.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2012, minutes: 85, rating: 5.2, genre: "sci-fi"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={MOVIES} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={MOVIES} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 367');
});

test('never below zero', () => {
  const ui = mount(<Cart items={MOVIES} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
