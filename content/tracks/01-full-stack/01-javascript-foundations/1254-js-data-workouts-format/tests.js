const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 66, calories: 271, kind: "cardio"},
  {id: 2, label: "Mon lift", minutes: 71, calories: 851, kind: "cardio"},
  {id: 3, label: "Fri run", minutes: 77, calories: 178, kind: "strength"},
  {id: 4, label: "Tue run", minutes: 27, calories: 646, kind: "mobility"},
  {id: 5, label: "Tue swim", minutes: 57, calories: 314, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 102, calories: 515, kind: "mobility"},
  {id: 7, label: "Fri yoga", minutes: 111, calories: 304, kind: "mobility"},
  {id: 8, label: "Thu yoga", minutes: 16, calories: 407, kind: "cardio"}
];

test("an empty list", () => {
  expect(describeWorkouts([])).toEqual([]);
});

test("all workouts", () => {
  expect(describeWorkouts(WORKOUTS)).toEqual(["Thu ride (66)","Mon lift (71)","Fri run (77)","Tue run (27)","Tue swim (57)","Wed lift (102)","Fri yoga (111)","Thu yoga (16)"]);
});
