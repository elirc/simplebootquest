export function songsInArtistRanked(songs, value) {
  return songs
    .filter((x) => x.artist === value)
    .sort((a, b) => b.plays - a.plays)
    .map((x) => x.title);
}
