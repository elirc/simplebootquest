const SONGS = [
  {id: 1, title: "Halo", seconds: 317, plays: 365, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 155, plays: 7225, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 292, plays: 2482, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 225, plays: 678, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 299, plays: 1079, artist: "Nova", mood: "calm"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(SONGS.filter((x) => x.title.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveSongSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ha");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Halo"]));
  expect(signals[1].aborted).toBe(true);
});
