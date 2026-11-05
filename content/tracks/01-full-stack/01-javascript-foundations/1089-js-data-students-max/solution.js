export function highestScore(students) {
  let best = null;
  for (const x of students) if (best === null || x.score > best.score) best = x;
  return best ? best.name : null;
}
