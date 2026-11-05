const MOVIES = [
  {id: 1, title: "Night Train", year: 2019, minutes: 127, rating: 8.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 1982, minutes: 113, rating: 8.3, genre: "drama"},
  {id: 3, title: "Quiet Storm", year: 1996, minutes: 175, rating: 5.3, genre: "drama"},
  {id: 4, title: "Blue River", year: 2004, minutes: 109, rating: 6.2, genre: "drama"},
  {id: 5, title: "Cloud Atlas", year: 2000, minutes: 146, rating: 8.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2012, minutes: 85, rating: 5.2, genre: "sci-fi"}
];

test('shows everything at first', () => {
  const ui = mount(<MovieFilter items={MOVIES} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<MovieFilter items={MOVIES} />);
  ui.type('input', "LA");
  expect(ui.findAll('li').map(text)).toEqual(["Last Light","Cloud Atlas"]);
});

test('empty state', () => {
  const ui = mount(<MovieFilter items={MOVIES} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
