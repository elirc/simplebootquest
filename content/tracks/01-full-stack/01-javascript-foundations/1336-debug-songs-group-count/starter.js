export function countSongsPerMood(songs) {
  const counts = {};
  for (const x of songs) counts[x.mood] = (counts[x.mood] ?? 1) + 1;
  return counts;
}
