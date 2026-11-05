export function averageSeconds(songs) {
  if (songs.length === 0) return null;
  const total = songs.reduce((sum, x) => sum + x.seconds, 0);
  return Math.round((total / songs.length) * 10) / 10;
}
