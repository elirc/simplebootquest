const MOVIES = [
  {id: 1, title: "Night Train", year: 2019, minutes: 127, rating: 8.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 1982, minutes: 113, rating: 8.3, genre: "drama"},
  {id: 3, title: "Quiet Storm", year: 1996, minutes: 175, rating: 5.3, genre: "drama"},
  {id: 4, title: "Blue River", year: 2004, minutes: 109, rating: 6.2, genre: "drama"},
  {id: 5, title: "Cloud Atlas", year: 2000, minutes: 146, rating: 8.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2012, minutes: 85, rating: 5.2, genre: "sci-fi"}
];

test('ascending first', () => {
  const ui = mount(<MovieSorter items={MOVIES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Open Road","Blue River","Last Light","Night Train","Cloud Atlas","Quiet Storm"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<MovieSorter items={MOVIES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Quiet Storm","Cloud Atlas","Night Train","Last Light","Blue River","Open Road"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(MOVIES);
  const ui = mount(<MovieSorter items={MOVIES} />);
  ui.click('button');
  expect(JSON.stringify(MOVIES)).toBe(before);
});
