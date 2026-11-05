export function averageAge(students) {
  if (students.length === 0) return null;
  const total = students.reduce((sum, x) => sum + x.age, 0);
  return Math.round((total / students.length) * 10) / 10;
}
