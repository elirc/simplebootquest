const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];

test('starts hidden', () => {
  const ui = mount(<SongToggle items={SONGS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show songs');
});

test('shows and hides', () => {
  const ui = mount(<SongToggle items={SONGS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Drift","Velvet","Echoes","Halo","Riverside","Gravity"]);
  expect(text(ui.find('button'))).toBe('Hide songs');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
