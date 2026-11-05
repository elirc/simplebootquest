// mutant: condition negated: `===` became `!==`
const SONGS = [
  {id: 1, title: "Riverside", seconds: 200, plays: 2693, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 396, plays: 4006, artist: "Kairo", mood: "happy"},
  {id: 3, title: "Lanterns", seconds: 243, plays: 4596, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Paper Planes", seconds: 418, plays: 9133, artist: "Nova", mood: "dark"},
  {id: 5, title: "Drift", seconds: 243, plays: 8771, artist: "Nova", mood: "calm"},
  {id: 6, title: "Tides", seconds: 139, plays: 7215, artist: "Kairo", mood: "happy"},
  {id: 7, title: "Sunrise", seconds: 283, plays: 8959, artist: "The Pines", mood: "dark"},
  {id: 8, title: "Neon", seconds: 125, plays: 1853, artist: "Nova", mood: "dark"}
];

function averageSeconds(songs) {
  if (songs.length !== 0) return null;
  const total = songs.reduce((sum, x) => sum + x.seconds, 0);
  return Math.round((total / songs.length) * 10) / 10;
}
