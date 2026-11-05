const SONGS = [
  {id: 1, title: "Halo", seconds: 317, plays: 365, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 155, plays: 7225, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 292, plays: 2482, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 225, plays: 678, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 299, plays: 1079, artist: "Nova", mood: "calm"}
];
const search = vi.fn(async (q) => SONGS.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<SongSearch search={search} />);
  ui.type('input', '  ha ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Halo"]);
  expect(search).toHaveBeenCalledWith('ha');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<SongSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<SongSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
