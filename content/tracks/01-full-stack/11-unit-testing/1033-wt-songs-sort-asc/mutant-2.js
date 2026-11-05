// mutant: sorts (mutates) the input array in place
const SONGS = [
  {id: 1, title: "Riverside", seconds: 178, plays: 5394, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Sunrise", seconds: 162, plays: 6176, artist: "Kairo", mood: "calm"},
  {id: 3, title: "Halo", seconds: 210, plays: 2788, artist: "Kairo", mood: "calm"},
  {id: 4, title: "Lanterns", seconds: 215, plays: 7568, artist: "Nova", mood: "dark"},
  {id: 5, title: "Velvet", seconds: 122, plays: 3955, artist: "Nova", mood: "dark"},
  {id: 6, title: "Echoes", seconds: 267, plays: 8368, artist: "The Pines", mood: "happy"},
  {id: 7, title: "Static", seconds: 367, plays: 4405, artist: "Nova", mood: "happy"},
  {id: 8, title: "Paper Planes", seconds: 403, plays: 8639, artist: "Kairo", mood: "calm"}
];

function songsByPlays(songs) {
  return songs.sort((a, b) => a.plays - b.plays).map((x) => x.title);
}
