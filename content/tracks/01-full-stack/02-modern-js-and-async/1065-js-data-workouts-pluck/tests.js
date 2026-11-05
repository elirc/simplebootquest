const WORKOUTS = [
  {id: 1, label: "Wed lift", minutes: 90, calories: 567, kind: "strength"},
  {id: 2, label: "Tue swim", minutes: 82, calories: 105, kind: "mobility"},
  {id: 3, label: "Fri yoga", minutes: 67, calories: 478, kind: "mobility"},
  {id: 4, label: "Fri run", minutes: 118, calories: 613, kind: "cardio"},
  {id: 5, label: "Thu ride", minutes: 50, calories: 878, kind: "strength"},
  {id: 6, label: "Thu yoga", minutes: 59, calories: 146, kind: "cardio"},
  {id: 7, label: "Sun walk", minutes: 60, calories: 453, kind: "strength"},
  {id: 8, label: "Wed swim", minutes: 26, calories: 558, kind: "strength"}
];

test("an empty list", () => {
  expect(summariseWorkouts([])).toEqual([]);
});

test("all workouts", () => {
  expect(summariseWorkouts(WORKOUTS)).toEqual([{"id":1,"label":"Wed lift","calories":567},{"id":2,"label":"Tue swim","calories":105},{"id":3,"label":"Fri yoga","calories":478},{"id":4,"label":"Fri run","calories":613},{"id":5,"label":"Thu ride","calories":878},{"id":6,"label":"Thu yoga","calories":146},{"id":7,"label":"Sun walk","calories":453},{"id":8,"label":"Wed swim","calories":558}]);
});
