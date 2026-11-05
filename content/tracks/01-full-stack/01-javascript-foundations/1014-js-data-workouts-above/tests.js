const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 17, calories: 827, kind: "cardio"},
  {id: 2, label: "Wed lift", minutes: 29, calories: 821, kind: "strength"},
  {id: 3, label: "Sat ride", minutes: 96, calories: 469, kind: "strength"},
  {id: 4, label: "Fri run", minutes: 75, calories: 462, kind: "cardio"},
  {id: 5, label: "Tue run", minutes: 34, calories: 559, kind: "cardio"},
  {id: 6, label: "Mon run", minutes: 108, calories: 350, kind: "strength"},
  {id: 7, label: "Sun walk", minutes: 97, calories: 724, kind: "cardio"},
  {id: 8, label: "Mon lift", minutes: 43, calories: 717, kind: "mobility"}
];

test("with 469", () => {
  expect(workoutsAbove(WORKOUTS, 469)).toEqual(["Wed swim","Wed lift","Tue run","Sun walk","Mon lift"]);
});

test("with 717", () => {
  expect(workoutsAbove(WORKOUTS, 717)).toEqual(["Wed swim","Wed lift","Sun walk"]);
});

test("with 999999", () => {
  expect(workoutsAbove(WORKOUTS, 999999)).toEqual([]);
});
