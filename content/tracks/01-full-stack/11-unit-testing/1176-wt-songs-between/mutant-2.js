// mutant: boundary: `<=` became `<`
const SONGS = [
  {id: 1, title: "Echoes", seconds: 311, plays: 8459, artist: "Nova", mood: "dark"},
  {id: 2, title: "Static", seconds: 342, plays: 7232, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Halo", seconds: 133, plays: 7214, artist: "Nova", mood: "calm"},
  {id: 4, title: "Gravity", seconds: 262, plays: 9285, artist: "Nova", mood: "dark"},
  {id: 5, title: "Paper Planes", seconds: 288, plays: 5888, artist: "Nova", mood: "happy"},
  {id: 6, title: "Lanterns", seconds: 255, plays: 6478, artist: "Kairo", mood: "dark"},
  {id: 7, title: "Drift", seconds: 277, plays: 1078, artist: "Kairo", mood: "calm"},
  {id: 8, title: "Tides", seconds: 311, plays: 4262, artist: "Nova", mood: "happy"}
];

function songsInRange(songs, low, high) {
  return songs.filter((x) => x.plays >= low && x.plays < high).map((x) => x.title);
}
