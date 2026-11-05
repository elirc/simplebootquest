const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2021, minutes: 143, rating: 6.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 139, rating: 4.4, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2020, minutes: 82, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 2018, minutes: 83, rating: 8.8, genre: "drama"},
  {id: 5, title: "Silver Fox", year: 1980, minutes: 169, rating: 4.2, genre: "comedy"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? MOVIES.slice(0, 1) : MOVIES.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<MovieBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Quiet Storm","Red Harbor","Winter Kings","Silver Fox"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
