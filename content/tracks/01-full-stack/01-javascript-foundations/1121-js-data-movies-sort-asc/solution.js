export function moviesByMinutes(movies) {
  return [...movies].sort((a, b) => a.minutes - b.minutes).map((x) => x.title);
}
