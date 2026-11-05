const SONGS = [
  {id: 1, title: "Halo", seconds: 285, plays: 1854, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Paper Planes", seconds: 231, plays: 8516, artist: "The Pines", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 366, plays: 6469, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Static", seconds: 282, plays: 8591, artist: "Nova", mood: "calm"},
  {id: 5, title: "Drift", seconds: 413, plays: 3443, artist: "The Pines", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 392, plays: 7986, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Lanterns", seconds: 266, plays: 2959, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Neon", seconds: 167, plays: 5811, artist: "The Pines", mood: "happy"}
];

test("an empty list", () => {
  expect(summariseSongs([])).toEqual([]);
});

test("all songs", () => {
  expect(summariseSongs(SONGS)).toEqual([{"id":1,"title":"Halo","plays":1854},{"id":2,"title":"Paper Planes","plays":8516},{"id":3,"title":"Echoes","plays":6469},{"id":4,"title":"Static","plays":8591},{"id":5,"title":"Drift","plays":3443},{"id":6,"title":"Sunrise","plays":7986},{"id":7,"title":"Lanterns","plays":2959},{"id":8,"title":"Neon","plays":5811}]);
});
