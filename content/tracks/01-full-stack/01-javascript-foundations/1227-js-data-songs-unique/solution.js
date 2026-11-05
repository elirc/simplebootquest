export function distinctMoods(songs) {
  return [...new Set(songs.map((x) => x.mood))].sort();
}
