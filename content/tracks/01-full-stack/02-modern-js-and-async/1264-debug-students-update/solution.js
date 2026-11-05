export function bumpScore(students, value, amount) {
  return students.map((x) => (x.course === value ? { ...x, score: x.score + amount } : x));
}
