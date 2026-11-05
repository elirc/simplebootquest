export function describeCourses(courses) {
  return courses.map((x) => `${x.title} (${x.lessons})`);
}
