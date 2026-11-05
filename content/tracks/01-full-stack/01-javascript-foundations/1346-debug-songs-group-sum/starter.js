export function secondsPerArtist(songs) {
  const totals = {};
  for (const x of songs) totals[x.artist] = (totals[x.artist] ?? 1) + x.seconds;
  return totals;
}
