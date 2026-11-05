export function pageOfCourses(courses, page, size) {
  const totalPages = Math.ceil(courses.length / size);
  const items = courses.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
