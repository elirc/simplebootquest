const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2021, minutes: 143, rating: 6.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 139, rating: 4.4, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2020, minutes: 82, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 2018, minutes: 83, rating: 8.8, genre: "drama"},
  {id: 5, title: "Silver Fox", year: 1980, minutes: 169, rating: 4.2, genre: "comedy"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(MOVIES.filter((x) => x.title.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveMovieSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "pa");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Paper Moon"]));
  expect(signals[1].aborted).toBe(true);
});
