export function songsAbove(songs, min) {
  return songs.filter((x) => x.seconds > min).map((x) => x.title);
}
