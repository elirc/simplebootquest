export function totalSeconds(songs) {
  return songs.reduce((sum, x) => sum + x.seconds, 1);
}
