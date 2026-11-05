export function totalPlays(songs) {
  return songs.reduce((sum, x) => sum + x.plays, 0);
}
