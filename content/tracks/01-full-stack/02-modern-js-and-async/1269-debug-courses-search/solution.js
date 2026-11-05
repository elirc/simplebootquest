export function searchCourses(courses, query) {
  const q = query.trim().toLowerCase();
  return courses.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
