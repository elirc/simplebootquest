const SONGS = [
  {id: 1, title: "Lanterns", seconds: 250, plays: 9706, artist: "Nova", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 165, plays: 7820, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Tides", seconds: 219, plays: 1731, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Halo", seconds: 292, plays: 766, artist: "Nova", mood: "dark"},
  {id: 5, title: "Velvet", seconds: 394, plays: 6597, artist: "Nova", mood: "happy"},
  {id: 6, title: "Riverside", seconds: 320, plays: 9296, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Static", seconds: 357, plays: 5060, artist: "Nova", mood: "happy"},
  {id: 8, title: "Paper Planes", seconds: 228, plays: 8602, artist: "The Pines", mood: "calm"}
];

test("with 5060, 7820", () => {
  expect(songsInRange(SONGS, 5060, 7820)).toEqual(["Sunrise","Velvet","Static"]);
});

test("with 7820, 8602", () => {
  expect(songsInRange(SONGS, 7820, 8602)).toEqual(["Sunrise","Paper Planes"]);
});

test("with 5060, 5060", () => {
  expect(songsInRange(SONGS, 5060, 5060)).toEqual(["Static"]);
});
