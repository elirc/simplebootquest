const WORKOUTS = [
  {id: 1, label: "Sat ride", minutes: 99, calories: 865, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 85, calories: 310, kind: "cardio"},
  {id: 3, label: "Wed swim", minutes: 109, calories: 111, kind: "mobility"},
  {id: 4, label: "Mon run", minutes: 71, calories: 93, kind: "cardio"},
  {id: 5, label: "Tue swim", minutes: 83, calories: 721, kind: "mobility"},
  {id: 6, label: "Mon lift", minutes: 80, calories: 121, kind: "cardio"},
  {id: 7, label: "Thu yoga", minutes: 15, calories: 799, kind: "strength"},
  {id: 8, label: "Wed lift", minutes: 65, calories: 866, kind: "strength"}
];

test("with 205", () => {
  expect(caloriesHistogram(WORKOUTS, 205)).toEqual({"0":3,"205":1,"615":2,"820":2});
});

test("with 410", () => {
  expect(caloriesHistogram(WORKOUTS, 410)).toEqual({"0":4,"410":2,"820":2});
});
