// mutant: condition negated: `===` became `!==`
const SONGS = [
  {id: 1, title: "Lanterns", seconds: 343, plays: 3308, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Paper Planes", seconds: 281, plays: 9276, artist: "Nova", mood: "happy"},
  {id: 3, title: "Drift", seconds: 266, plays: 3705, artist: "Kairo", mood: "dark"},
  {id: 4, title: "Riverside", seconds: 323, plays: 103, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 370, plays: 4312, artist: "Nova", mood: "dark"},
  {id: 6, title: "Echoes", seconds: 154, plays: 9394, artist: "Kairo", mood: "calm"},
  {id: 7, title: "Static", seconds: 123, plays: 9329, artist: "Nova", mood: "calm"},
  {id: 8, title: "Velvet", seconds: 283, plays: 3260, artist: "Kairo", mood: "happy"}
];

function songsInArtistRanked(songs, value) {
  return songs
    .filter((x) => x.artist !== value)
    .sort((a, b) => b.plays - a.plays)
    .map((x) => x.title);
}
