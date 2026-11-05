export function bumpAge(students, value, amount) {
  return students.map((x) => (x.course === value ? { ...x, age: x.age + amount } : x));
}
