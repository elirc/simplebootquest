const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2021, minutes: 143, rating: 6.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 139, rating: 4.4, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2020, minutes: 82, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 2018, minutes: 83, rating: 8.8, genre: "drama"},
  {id: 5, title: "Silver Fox", year: 1980, minutes: 169, rating: 4.2, genre: "comedy"}
];
const byId = (id) => MOVIES.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<MovieDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Quiet Storm"));
  expect(ui.text()).toContain("release year: 1983");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<MovieDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<MovieDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Red Harbor"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<MovieDetail id={1} load={load} />);
  ui.rerender(<MovieDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Winter Kings"));
});
