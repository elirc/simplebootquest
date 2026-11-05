const SONGS = [
  {id: 1, title: "Lanterns", seconds: 156, plays: 5225, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Paper Planes", seconds: 221, plays: 3811, artist: "Kairo", mood: "happy"},
  {id: 3, title: "Drift", seconds: 237, plays: 7023, artist: "The Pines", mood: "dark"},
  {id: 4, title: "Neon", seconds: 255, plays: 9235, artist: "Nova", mood: "calm"},
  {id: 5, title: "Halo", seconds: 226, plays: 9139, artist: "Nova", mood: "happy"},
  {id: 6, title: "Tides", seconds: 148, plays: 1860, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Gravity", seconds: 400, plays: 8128, artist: "Nova", mood: "dark"},
  {id: 8, title: "Echoes", seconds: 240, plays: 3352, artist: "Nova", mood: "happy"}
];

test("an empty list", () => {
  expect(songsById([])).toEqual({});
});

test("all songs", () => {
  expect(songsById(SONGS)).toEqual({"1":"Lanterns","2":"Paper Planes","3":"Drift","4":"Neon","5":"Halo","6":"Tides","7":"Gravity","8":"Echoes"});
});
