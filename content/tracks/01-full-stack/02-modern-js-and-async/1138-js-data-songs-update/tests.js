const SONGS = [
  {id: 1, title: "Velvet", seconds: 386, plays: 4900, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 256, plays: 3900, artist: "The Pines", mood: "happy"},
  {id: 3, title: "Static", seconds: 131, plays: 7581, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Tides", seconds: 131, plays: 8216, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 297, plays: 8968, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Drift", seconds: 145, plays: 1371, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Neon", seconds: 325, plays: 5188, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Sunrise", seconds: 121, plays: 9781, artist: "Nova", mood: "dark"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(SONGS);
  bumpPlays(SONGS, "Nova", 10);
  expect(JSON.stringify(SONGS)).toBe(before);
});

test("with \"Nova\", 10", () => {
  expect(bumpPlays(SONGS, "Nova", 10)).toEqual([{"id":1,"title":"Velvet","seconds":386,"plays":4900,"artist":"Kairo","mood":"happy"},{"id":2,"title":"Gravity","seconds":256,"plays":3900,"artist":"The Pines","mood":"happy"},{"id":3,"title":"Static","seconds":131,"plays":7581,"artist":"Kairo","mood":"calm"},{"id":4,"title":"Tides","seconds":131,"plays":8226,"artist":"Nova","mood":"calm"},{"id":5,"title":"Riverside","seconds":297,"plays":8968,"artist":"Kairo","mood":"dark"},{"id":6,"title":"Drift","seconds":145,"plays":1371,"artist":"The Pines","mood":"calm"},{"id":7,"title":"Neon","seconds":325,"plays":5188,"artist":"Kairo","mood":"calm"},{"id":8,"title":"Sunrise","seconds":121,"plays":9791,"artist":"Nova","mood":"dark"}]);
});

test("with \"The Pines\", 1", () => {
  expect(bumpPlays(SONGS, "The Pines", 1)).toEqual([{"id":1,"title":"Velvet","seconds":386,"plays":4900,"artist":"Kairo","mood":"happy"},{"id":2,"title":"Gravity","seconds":256,"plays":3901,"artist":"The Pines","mood":"happy"},{"id":3,"title":"Static","seconds":131,"plays":7581,"artist":"Kairo","mood":"calm"},{"id":4,"title":"Tides","seconds":131,"plays":8216,"artist":"Nova","mood":"calm"},{"id":5,"title":"Riverside","seconds":297,"plays":8968,"artist":"Kairo","mood":"dark"},{"id":6,"title":"Drift","seconds":145,"plays":1372,"artist":"The Pines","mood":"calm"},{"id":7,"title":"Neon","seconds":325,"plays":5188,"artist":"Kairo","mood":"calm"},{"id":8,"title":"Sunrise","seconds":121,"plays":9781,"artist":"Nova","mood":"dark"}]);
});
