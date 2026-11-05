const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 93, calories: 677, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 106, calories: 883, kind: "cardio"},
  {id: 3, label: "Mon lift", minutes: 70, calories: 669, kind: "mobility"},
  {id: 4, label: "Tue run", minutes: 118, calories: 393, kind: "strength"},
  {id: 5, label: "Thu ride", minutes: 112, calories: 574, kind: "strength"},
  {id: 6, label: "Wed lift", minutes: 47, calories: 698, kind: "cardio"},
  {id: 7, label: "Wed swim", minutes: 115, calories: 90, kind: "cardio"},
  {id: 8, label: "Thu yoga", minutes: 25, calories: 392, kind: "cardio"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  topWorkoutsByMinutes(WORKOUTS, 1);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("with 1", () => {
  expect(topWorkoutsByMinutes(WORKOUTS, 1)).toEqual(["Tue run"]);
});

test("with 3", () => {
  expect(topWorkoutsByMinutes(WORKOUTS, 3)).toEqual(["Tue run","Wed swim","Thu ride"]);
});

test("with 0", () => {
  expect(topWorkoutsByMinutes(WORKOUTS, 0)).toEqual([]);
});
