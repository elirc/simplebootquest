export function countSongsPerMood(songs) {
  const counts = {};
  for (const x of songs) counts[x.mood] = (counts[x.mood] ?? 0) + 1;
  return counts;
}
