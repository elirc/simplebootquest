const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 107, calories: 161, kind: "strength"},
  {id: 2, label: "Thu ride", minutes: 95, calories: 298, kind: "strength"},
  {id: 3, label: "Tue run", minutes: 97, calories: 541, kind: "mobility"},
  {id: 4, label: "Fri run", minutes: 106, calories: 325, kind: "strength"},
  {id: 5, label: "Mon lift", minutes: 90, calories: 828, kind: "mobility"},
  {id: 6, label: "Sat ride", minutes: 44, calories: 293, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 46, calories: 619, kind: "cardio"},
  {id: 8, label: "Fri yoga", minutes: 111, calories: 156, kind: "strength"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  topWorkoutsByCalories(WORKOUTS, 1);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("with 1", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 1)).toEqual(["Mon lift"]);
});

test("with 3", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 3)).toEqual(["Mon lift","Wed swim","Tue run"]);
});

test("with 0", () => {
  expect(topWorkoutsByCalories(WORKOUTS, 0)).toEqual([]);
});
