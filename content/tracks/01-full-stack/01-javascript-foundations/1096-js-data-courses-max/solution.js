export function highestLessons(courses) {
  let best = null;
  for (const x of courses) if (best === null || x.lessons > best.lessons) best = x;
  return best ? best.title : null;
}
