const SONGS = [
  {id: 1, title: "Riverside", seconds: 150, plays: 7949, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Velvet", seconds: 364, plays: 1945, artist: "Nova", mood: "dark"},
  {id: 3, title: "Static", seconds: 398, plays: 7697, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 301, plays: 6630, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 156, plays: 2772, artist: "The Pines", mood: "happy"},
  {id: 6, title: "Halo", seconds: 253, plays: 1229, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Drift", seconds: 281, plays: 46, artist: "Nova", mood: "calm"},
  {id: 8, title: "Echoes", seconds: 243, plays: 8645, artist: "Kairo", mood: "dark"}
];

test("with 75", () => {
  expect(secondsHistogram(SONGS, 75)).toEqual({"150":2,"225":3,"300":2,"375":1});
});

test("with 150", () => {
  expect(secondsHistogram(SONGS, 150)).toEqual({"150":5,"300":3});
});
