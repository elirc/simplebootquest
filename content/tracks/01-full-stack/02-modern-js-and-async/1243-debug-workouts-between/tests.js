const WORKOUTS = [
  {id: 1, label: "Mon run", minutes: 92, calories: 99, kind: "mobility"},
  {id: 2, label: "Thu ride", minutes: 60, calories: 628, kind: "strength"},
  {id: 3, label: "Fri run", minutes: 23, calories: 262, kind: "strength"},
  {id: 4, label: "Sun walk", minutes: 44, calories: 870, kind: "strength"},
  {id: 5, label: "Tue run", minutes: 116, calories: 152, kind: "strength"},
  {id: 6, label: "Wed swim", minutes: 91, calories: 651, kind: "mobility"},
  {id: 7, label: "Thu yoga", minutes: 87, calories: 272, kind: "cardio"},
  {id: 8, label: "Sat ride", minutes: 69, calories: 861, kind: "cardio"}
];

test("with 262, 628", () => {
  expect(workoutsInRange(WORKOUTS, 262, 628)).toEqual(["Thu ride","Fri run","Thu yoga"]);
});

test("with 628, 651", () => {
  expect(workoutsInRange(WORKOUTS, 628, 651)).toEqual(["Thu ride","Wed swim"]);
});

test("with 262, 262", () => {
  expect(workoutsInRange(WORKOUTS, 262, 262)).toEqual(["Fri run"]);
});
