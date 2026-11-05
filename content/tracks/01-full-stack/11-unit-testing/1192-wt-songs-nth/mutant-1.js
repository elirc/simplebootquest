// mutant: boundary: `>=` became `>`
const SONGS = [
  {id: 1, title: "Neon", seconds: 173, plays: 5262, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Gravity", seconds: 284, plays: 8743, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Drift", seconds: 268, plays: 6916, artist: "The Pines", mood: "calm"},
  {id: 4, title: "Halo", seconds: 397, plays: 4046, artist: "The Pines", mood: "calm"},
  {id: 5, title: "Tides", seconds: 248, plays: 5543, artist: "The Pines", mood: "dark"},
  {id: 6, title: "Echoes", seconds: 143, plays: 8319, artist: "The Pines", mood: "calm"},
  {id: 7, title: "Sunrise", seconds: 304, plays: 1486, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Riverside", seconds: 203, plays: 4965, artist: "Kairo", mood: "happy"}
];

function nthByPlays(songs, n) {
  const sorted = [...songs].sort((a, b) => b.plays - a.plays);
  return n > 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
