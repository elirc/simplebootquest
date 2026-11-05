export function songsInMoodRanked(songs, value) {
  return songs
    .filter((x) => x.mood === value)
    .sort((a, b) => a.plays - b.plays)
    .map((x) => x.title);
}
