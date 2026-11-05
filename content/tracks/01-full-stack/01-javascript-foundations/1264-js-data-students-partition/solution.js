export function splitStudentsByGraduated(students) {
  const yes = [];
  const no = [];
  for (const x of students) (x.graduated ? yes : no).push(x.name);
  return { yes, no };
}
