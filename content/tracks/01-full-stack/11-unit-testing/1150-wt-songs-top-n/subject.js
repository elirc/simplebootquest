const SONGS = [
  {id: 1, title: "Paper Planes", seconds: 203, plays: 226, artist: "Nova", mood: "dark"},
  {id: 2, title: "Gravity", seconds: 378, plays: 5723, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 374, plays: 506, artist: "Nova", mood: "calm"},
  {id: 4, title: "Drift", seconds: 142, plays: 8458, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Lanterns", seconds: 392, plays: 4198, artist: "Kairo", mood: "happy"},
  {id: 6, title: "Velvet", seconds: 144, plays: 9230, artist: "Nova", mood: "dark"},
  {id: 7, title: "Tides", seconds: 227, plays: 5026, artist: "The Pines", mood: "calm"},
  {id: 8, title: "Halo", seconds: 231, plays: 7119, artist: "Kairo", mood: "dark"}
];

function topSongsBySeconds(songs, n) {
  return [...songs].sort((a, b) => b.seconds - a.seconds).slice(0, n).map((x) => x.title);
}
