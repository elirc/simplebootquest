const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];

test('first page', () => {
  const ui = mount(<SongPager items={SONGS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Drift","Velvet","Echoes"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<SongPager items={SONGS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Halo","Riverside","Gravity"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
