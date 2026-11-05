const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 40, calories: 353, kind: "cardio"},
  {id: 2, label: "Thu yoga", minutes: 85, calories: 296, kind: "mobility"},
  {id: 3, label: "Wed lift", minutes: 45, calories: 94, kind: "mobility"},
  {id: 4, label: "Mon run", minutes: 115, calories: 610, kind: "cardio"},
  {id: 5, label: "Wed swim", minutes: 117, calories: 632, kind: "mobility"},
  {id: 6, label: "Sun walk", minutes: 90, calories: 328, kind: "cardio"},
  {id: 7, label: "Fri run", minutes: 94, calories: 795, kind: "cardio"},
  {id: 8, label: "Tue run", minutes: 105, calories: 484, kind: "mobility"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  workoutsByCalories(WORKOUTS);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("all workouts", () => {
  expect(workoutsByCalories(WORKOUTS)).toEqual(["Wed lift","Thu yoga","Sun walk","Tue swim","Tue run","Mon run","Wed swim","Fri run"]);
});
