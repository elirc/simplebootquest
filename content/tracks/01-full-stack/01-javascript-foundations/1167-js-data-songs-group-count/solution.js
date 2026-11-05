export function countSongsPerArtist(songs) {
  const counts = {};
  for (const x of songs) counts[x.artist] = (counts[x.artist] ?? 0) + 1;
  return counts;
}
