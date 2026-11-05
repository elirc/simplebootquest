const MOVIES = [
  {id: 1, title: "Paper Moon", year: 2021, minutes: 143, rating: 6.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 139, rating: 4.4, genre: "drama"},
  {id: 3, title: "Red Harbor", year: 2020, minutes: 82, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 2018, minutes: 83, rating: 8.8, genre: "drama"},
  {id: 5, title: "Silver Fox", year: 1980, minutes: 169, rating: 4.2, genre: "comedy"}
];
const search = vi.fn(async (q) => MOVIES.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<MovieSearch search={search} />);
  ui.type('input', '  pa ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Paper Moon"]);
  expect(search).toHaveBeenCalledWith('pa');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<MovieSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<MovieSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
