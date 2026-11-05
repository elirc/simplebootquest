export function enrolledOf(courses, title) {
  const found = courses.find((x) => x.title === title);
  return found ? found.enrolled : null;
}
