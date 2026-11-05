export function songsInMoodRanked(songs, value) {
  return songs
    .filter((x) => x.mood === value)
    .sort((a, b) => b.plays - a.plays)
    .map((x) => x.title);
}
