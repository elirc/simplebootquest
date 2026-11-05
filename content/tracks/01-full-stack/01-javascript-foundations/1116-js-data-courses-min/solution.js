export function lowestEnrolled(courses) {
  let best = null;
  for (const x of courses) if (best === null || x.enrolled < best.enrolled) best = x;
  return best ? best.title : null;
}
