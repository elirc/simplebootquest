const WORKOUTS = [
  {id: 1, label: "Thu ride", minutes: 108, calories: 694, kind: "strength"},
  {id: 2, label: "Fri run", minutes: 94, calories: 321, kind: "strength"},
  {id: 3, label: "Wed swim", minutes: 87, calories: 353, kind: "mobility"},
  {id: 4, label: "Mon lift", minutes: 88, calories: 254, kind: "strength"},
  {id: 5, label: "Fri yoga", minutes: 61, calories: 540, kind: "mobility"},
  {id: 6, label: "Wed lift", minutes: 106, calories: 132, kind: "strength"},
  {id: 7, label: "Thu yoga", minutes: 37, calories: 545, kind: "cardio"},
  {id: 8, label: "Mon run", minutes: 34, calories: 125, kind: "strength"}
];

test("with \"Mon lift\"", () => {
  expect(minutesOf(WORKOUTS, "Mon lift")).toEqual(88);
});

test("with \"Nope\"", () => {
  expect(minutesOf(WORKOUTS, "Nope")).toEqual(null);
});
