// mutant: `Math.ceil` became `Math.floor`
const SONGS = [
  {id: 1, title: "Drift", seconds: 310, plays: 310, artist: "Kairo", mood: "calm"},
  {id: 2, title: "Static", seconds: 322, plays: 9291, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Lanterns", seconds: 131, plays: 2157, artist: "Nova", mood: "happy"},
  {id: 4, title: "Tides", seconds: 281, plays: 1054, artist: "Nova", mood: "happy"},
  {id: 5, title: "Neon", seconds: 402, plays: 117, artist: "Nova", mood: "happy"},
  {id: 6, title: "Halo", seconds: 216, plays: 5547, artist: "Nova", mood: "calm"},
  {id: 7, title: "Echoes", seconds: 334, plays: 390, artist: "The Pines", mood: "calm"},
  {id: 8, title: "Gravity", seconds: 311, plays: 6770, artist: "Nova", mood: "calm"}
];

function pageOfSongs(songs, page, size) {
  const totalPages = Math.floor(songs.length / size);
  const items = songs.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
