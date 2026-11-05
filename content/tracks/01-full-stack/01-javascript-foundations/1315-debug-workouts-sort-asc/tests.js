const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 34, calories: 613, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 54, calories: 296, kind: "strength"},
  {id: 3, label: "Thu ride", minutes: 89, calories: 622, kind: "mobility"},
  {id: 4, label: "Tue swim", minutes: 111, calories: 548, kind: "strength"},
  {id: 5, label: "Mon lift", minutes: 32, calories: 743, kind: "strength"},
  {id: 6, label: "Sun walk", minutes: 72, calories: 549, kind: "mobility"},
  {id: 7, label: "Tue run", minutes: 94, calories: 679, kind: "mobility"},
  {id: 8, label: "Thu yoga", minutes: 97, calories: 783, kind: "mobility"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  workoutsByCalories(WORKOUTS);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("all workouts", () => {
  expect(workoutsByCalories(WORKOUTS)).toEqual(["Fri run","Tue swim","Sun walk","Sat ride","Thu ride","Tue run","Mon lift","Thu yoga"]);
});
