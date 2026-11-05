const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];

test('one tab per artist', () => {
  const ui = mount(<SongTabs items={SONGS} />);
  expect(ui.findAll('button').map(text)).toEqual(["Nova","Kairo"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Drift","Velvet","Halo","Riverside","Gravity"]);
});

test('switching tabs', () => {
  const ui = mount(<SongTabs items={SONGS} />);
  ui.click(ui.findAll('button')[1]);
  expect(ui.findAll('li').map(text)).toEqual(["Echoes"]);
});
