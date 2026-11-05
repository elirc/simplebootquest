export function studentsById(students) {
  const byId = {};
  for (const x of students) byId[x.id] = x.name;
  return byId;
}
