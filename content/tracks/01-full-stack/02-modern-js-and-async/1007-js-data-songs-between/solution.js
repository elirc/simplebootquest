export function songsInRange(songs, low, high) {
  return songs.filter((x) => x.plays >= low && x.plays <= high).map((x) => x.title);
}
