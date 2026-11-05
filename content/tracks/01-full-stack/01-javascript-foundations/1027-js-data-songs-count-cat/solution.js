export function countSongsByMood(songs, value) {
  let count = 0;
  for (const x of songs) if (x.mood === value) count++;
  return count;
}
