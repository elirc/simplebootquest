const WORKOUTS = [
  {id: 1, label: "Thu yoga", minutes: 71, calories: 252, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 112, calories: 191, kind: "cardio"},
  {id: 3, label: "Wed swim", minutes: 102, calories: 452, kind: "strength"},
  {id: 4, label: "Thu ride", minutes: 16, calories: 855, kind: "cardio"},
  {id: 5, label: "Tue swim", minutes: 95, calories: 391, kind: "strength"},
  {id: 6, label: "Sat ride", minutes: 92, calories: 198, kind: "mobility"},
  {id: 7, label: "Wed lift", minutes: 53, calories: 520, kind: "cardio"},
  {id: 8, label: "Mon lift", minutes: 28, calories: 464, kind: "strength"}
];

test("an empty list", () => {
  expect(summariseWorkouts([])).toEqual([]);
});

test("all workouts", () => {
  expect(summariseWorkouts(WORKOUTS)).toEqual([{"id":1,"label":"Thu yoga","minutes":71},{"id":2,"label":"Sun walk","minutes":112},{"id":3,"label":"Wed swim","minutes":102},{"id":4,"label":"Thu ride","minutes":16},{"id":5,"label":"Tue swim","minutes":95},{"id":6,"label":"Sat ride","minutes":92},{"id":7,"label":"Wed lift","minutes":53},{"id":8,"label":"Mon lift","minutes":28}]);
});
