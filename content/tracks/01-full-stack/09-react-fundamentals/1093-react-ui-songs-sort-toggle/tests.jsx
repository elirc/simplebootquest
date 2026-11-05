const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];

test('ascending first', () => {
  const ui = mount(<SongSorter items={SONGS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Echoes","Drift","Riverside","Halo","Velvet","Gravity"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<SongSorter items={SONGS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Gravity","Velvet","Halo","Riverside","Drift","Echoes"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(SONGS);
  const ui = mount(<SongSorter items={SONGS} />);
  ui.click('button');
  expect(JSON.stringify(SONGS)).toBe(before);
});
