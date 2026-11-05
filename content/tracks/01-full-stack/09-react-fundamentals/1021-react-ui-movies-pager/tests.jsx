const MOVIES = [
  {id: 1, title: "Night Train", year: 2019, minutes: 127, rating: 8.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 1982, minutes: 113, rating: 8.3, genre: "drama"},
  {id: 3, title: "Quiet Storm", year: 1996, minutes: 175, rating: 5.3, genre: "drama"},
  {id: 4, title: "Blue River", year: 2004, minutes: 109, rating: 6.2, genre: "drama"},
  {id: 5, title: "Cloud Atlas", year: 2000, minutes: 146, rating: 8.5, genre: "drama"},
  {id: 6, title: "Open Road", year: 2012, minutes: 85, rating: 5.2, genre: "sci-fi"}
];

test('first page', () => {
  const ui = mount(<MoviePager items={MOVIES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Night Train","Last Light"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<MoviePager items={MOVIES} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Cloud Atlas","Open Road"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
