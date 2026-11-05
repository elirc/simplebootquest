const SONGS = [
  {id: 1, title: "Halo", seconds: 317, plays: 365, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 155, plays: 7225, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 292, plays: 2482, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 225, plays: 678, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 299, plays: 1079, artist: "Nova", mood: "calm"}
];
const byId = (id) => SONGS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<SongDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Gravity"));
  expect(ui.text()).toContain("length in seconds: 155");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<SongDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<SongDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Drift"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<SongDetail id={1} load={load} />);
  ui.rerender(<SongDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Lanterns"));
});
