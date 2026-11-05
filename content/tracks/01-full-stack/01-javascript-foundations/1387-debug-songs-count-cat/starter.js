export function countSongsByArtist(songs, value) {
  let count = 0;
  for (const x of songs) if (x.artist !== value) count++;
  return count;
}
