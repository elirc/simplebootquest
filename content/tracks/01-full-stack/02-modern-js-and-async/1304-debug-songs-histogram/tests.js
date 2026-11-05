const SONGS = [
  {id: 1, title: "Static", seconds: 185, plays: 733, artist: "Kairo", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 237, plays: 16, artist: "Nova", mood: "happy"},
  {id: 3, title: "Tides", seconds: 419, plays: 8180, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 322, plays: 2149, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Sunrise", seconds: 337, plays: 6798, artist: "Nova", mood: "calm"},
  {id: 6, title: "Drift", seconds: 250, plays: 6398, artist: "Nova", mood: "happy"},
  {id: 7, title: "Velvet", seconds: 179, plays: 3850, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Lanterns", seconds: 213, plays: 78, artist: "The Pines", mood: "dark"}
];

test("with 75", () => {
  expect(secondsHistogram(SONGS, 75)).toEqual({"150":3,"225":2,"300":2,"375":1});
});

test("with 150", () => {
  expect(secondsHistogram(SONGS, 150)).toEqual({"150":5,"300":3});
});
