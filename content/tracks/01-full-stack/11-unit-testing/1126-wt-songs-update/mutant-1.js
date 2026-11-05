// mutant: condition negated: `===` became `!==`
const SONGS = [
  {id: 1, title: "Tides", seconds: 162, plays: 6369, artist: "Nova", mood: "calm"},
  {id: 2, title: "Drift", seconds: 385, plays: 8542, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Velvet", seconds: 192, plays: 7917, artist: "Nova", mood: "calm"},
  {id: 4, title: "Lanterns", seconds: 390, plays: 1868, artist: "Kairo", mood: "dark"},
  {id: 5, title: "Paper Planes", seconds: 140, plays: 3978, artist: "Kairo", mood: "dark"},
  {id: 6, title: "Echoes", seconds: 229, plays: 7622, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Halo", seconds: 310, plays: 1288, artist: "The Pines", mood: "calm"},
  {id: 8, title: "Neon", seconds: 218, plays: 5266, artist: "Nova", mood: "calm"}
];

function bumpPlays(songs, value, amount) {
  return songs.map((x) => (x.mood !== value ? { ...x, plays: x.plays + amount } : x));
}
