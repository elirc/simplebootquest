export function bumpPlays(songs, value, amount) {
  return songs.map((x) => (x.artist === value ? { ...x, plays: x.plays + amount } : x));
}
