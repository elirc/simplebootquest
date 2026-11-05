const WORKOUTS = [
  {id: 1, label: "Tue run", minutes: 43, calories: 873, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 60, calories: 628, kind: "mobility"},
  {id: 3, label: "Wed swim", minutes: 26, calories: 447, kind: "mobility"},
  {id: 4, label: "Fri yoga", minutes: 50, calories: 125, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 55, calories: 291, kind: "cardio"},
  {id: 6, label: "Sat ride", minutes: 38, calories: 112, kind: "cardio"},
  {id: 7, label: "Wed lift", minutes: 120, calories: 714, kind: "strength"},
  {id: 8, label: "Thu yoga", minutes: 42, calories: 453, kind: "cardio"}
];

test("an empty list", () => {
  expect(workoutsById([])).toEqual({});
});

test("all workouts", () => {
  expect(workoutsById(WORKOUTS)).toEqual({"1":"Tue run","2":"Sun walk","3":"Wed swim","4":"Fri yoga","5":"Fri run","6":"Sat ride","7":"Wed lift","8":"Thu yoga"});
});
