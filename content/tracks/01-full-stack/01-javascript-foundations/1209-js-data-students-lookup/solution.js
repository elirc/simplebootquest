export function scoreOf(students, name) {
  const found = students.find((x) => x.name === name);
  return found ? found.score : null;
}
