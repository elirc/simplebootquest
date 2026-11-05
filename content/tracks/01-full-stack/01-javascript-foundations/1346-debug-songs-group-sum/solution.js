export function secondsPerArtist(songs) {
  const totals = {};
  for (const x of songs) totals[x.artist] = (totals[x.artist] ?? 0) + x.seconds;
  return totals;
}
