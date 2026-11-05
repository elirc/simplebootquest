const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 42, calories: 158, kind: "cardio"},
  {id: 2, label: "Mon lift", minutes: 119, calories: 564, kind: "mobility"},
  {id: 3, label: "Thu yoga", minutes: 62, calories: 307, kind: "strength"},
  {id: 4, label: "Tue run", minutes: 105, calories: 514, kind: "strength"},
  {id: 5, label: "Fri run", minutes: 66, calories: 434, kind: "strength"},
  {id: 6, label: "Fri yoga", minutes: 58, calories: 148, kind: "mobility"},
  {id: 7, label: "Mon run", minutes: 111, calories: 538, kind: "strength"},
  {id: 8, label: "Wed lift", minutes: 40, calories: 97, kind: "strength"}
];

test("with \"Mon run\"", () => {
  expect(minutesOf(WORKOUTS, "Mon run")).toEqual(111);
});

test("with \"Nope\"", () => {
  expect(minutesOf(WORKOUTS, "Nope")).toEqual(null);
});
