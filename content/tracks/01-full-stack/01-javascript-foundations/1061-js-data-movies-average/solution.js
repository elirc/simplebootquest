export function averageMinutes(movies) {
  if (movies.length === 0) return null;
  const total = movies.reduce((sum, x) => sum + x.minutes, 0);
  return Math.round((total / movies.length) * 10) / 10;
}
