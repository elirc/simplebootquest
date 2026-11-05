export function coursesById(courses) {
  const byId = {};
  for (const x of courses) byId[x.id] = x.title;
  return byId;
}
