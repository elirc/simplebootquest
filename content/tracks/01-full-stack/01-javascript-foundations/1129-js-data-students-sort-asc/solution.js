export function studentsByScore(students) {
  return [...students].sort((a, b) => a.score - b.score).map((x) => x.name);
}
