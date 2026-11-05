// mutant: input is no longer trimmed
const SONGS = [
  {id: 1, title: "Static", seconds: 169, plays: 3401, artist: "Kairo", mood: "dark"},
  {id: 2, title: "Echoes", seconds: 341, plays: 527, artist: "Nova", mood: "calm"},
  {id: 3, title: "Lanterns", seconds: 358, plays: 7735, artist: "Nova", mood: "happy"},
  {id: 4, title: "Gravity", seconds: 202, plays: 5975, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 331, plays: 8427, artist: "Nova", mood: "happy"},
  {id: 6, title: "Tides", seconds: 273, plays: 5782, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Velvet", seconds: 368, plays: 6948, artist: "Nova", mood: "calm"},
  {id: 8, title: "Paper Planes", seconds: 238, plays: 8659, artist: "Nova", mood: "happy"}
];

function searchSongs(songs, query) {
  const q = query.toLowerCase();
  return songs.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
