const SONGS = [
  {id: 1, title: "Tides", seconds: 275, plays: 4838, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Drift", seconds: 169, plays: 3923, artist: "Nova", mood: "happy"},
  {id: 3, title: "Static", seconds: 267, plays: 2058, artist: "The Pines", mood: "dark"},
  {id: 4, title: "Velvet", seconds: 349, plays: 4665, artist: "Nova", mood: "calm"},
  {id: 5, title: "Halo", seconds: 154, plays: 3715, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Sunrise", seconds: 389, plays: 9106, artist: "Nova", mood: "dark"},
  {id: 7, title: "Gravity", seconds: 136, plays: 2932, artist: "The Pines", mood: "happy"},
  {id: 8, title: "Neon", seconds: 341, plays: 5499, artist: "The Pines", mood: "calm"}
];

test("an empty list", () => {
  expect(distinctMoods([])).toEqual([]);
});

test("all songs", () => {
  expect(distinctMoods(SONGS)).toEqual(["calm","dark","happy"]);
});
