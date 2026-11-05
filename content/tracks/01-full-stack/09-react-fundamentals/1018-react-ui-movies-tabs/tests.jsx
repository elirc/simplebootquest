const MOVIES = [
  {id: 1, title: "Night Train", year: 2019, minutes: 127, rating: 8.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 1982, minutes: 113, rating: 8.3, genre: "drama"},
  {id: 3, title: "Quiet Storm", year: 1996, minutes: 175, rating: 5.3, genre: "drama"},
  {id: 4, title: "Blue River", year: 2004, minutes: 109, rating: 6.2, genre: "drama"},
  {id: 5, title: "Cloud Atlas", year: 2000, minutes: 146, rating: 8.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2012, minutes: 85, rating: 5.2, genre: "sci-fi"}
];

test('one tab per genre', () => {
  const ui = mount(<MovieTabs items={MOVIES} />);
  expect(ui.findAll('button').map(text)).toEqual(["sci-fi","drama"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Night Train","Open Road"]);
});

test('switching tabs', () => {
  const ui = mount(<MovieTabs items={MOVIES} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["Last Light","Quiet Storm","Blue River","Cloud Atlas"]);
});
