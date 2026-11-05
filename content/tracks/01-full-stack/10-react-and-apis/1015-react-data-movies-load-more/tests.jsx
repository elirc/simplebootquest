const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2021, minutes: 143, rating: 6.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 139, rating: 4.4, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2020, minutes: 82, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 2018, minutes: 83, rating: 8.8, genre: "drama"},
  {id: 5, title: "Silver Fox", year: 1980, minutes: 169, rating: 4.2, genre: "comedy"}
];
const loadPage = vi.fn(async (page) => ({ items: MOVIES.slice((page - 1) * 2, page * 2), hasMore: page * 2 < MOVIES.length }));

test('loads pages and appends', async () => {
  const ui = mount(<MovieFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Paper Moon","Quiet Storm","Red Harbor","Winter Kings","Silver Fox"]));
  expect(ui.find('button')).toBeUndefined();
});
