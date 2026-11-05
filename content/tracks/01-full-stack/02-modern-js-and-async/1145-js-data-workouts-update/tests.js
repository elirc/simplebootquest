const WORKOUTS = [
  {id: 1, label: "Wed swim", minutes: 22, calories: 240, kind: "cardio"},
  {id: 2, label: "Sun walk", minutes: 36, calories: 466, kind: "mobility"},
  {id: 3, label: "Tue swim", minutes: 58, calories: 705, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 26, calories: 126, kind: "cardio"},
  {id: 5, label: "Fri run", minutes: 111, calories: 160, kind: "strength"},
  {id: 6, label: "Fri yoga", minutes: 50, calories: 605, kind: "cardio"},
  {id: 7, label: "Mon lift", minutes: 56, calories: 480, kind: "strength"},
  {id: 8, label: "Sat ride", minutes: 99, calories: 838, kind: "strength"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  bumpCalories(WORKOUTS, "cardio", 10);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("with \"cardio\", 10", () => {
  expect(bumpCalories(WORKOUTS, "cardio", 10)).toEqual([{"id":1,"label":"Wed swim","minutes":22,"calories":250,"kind":"cardio"},{"id":2,"label":"Sun walk","minutes":36,"calories":466,"kind":"mobility"},{"id":3,"label":"Tue swim","minutes":58,"calories":715,"kind":"cardio"},{"id":4,"label":"Wed lift","minutes":26,"calories":136,"kind":"cardio"},{"id":5,"label":"Fri run","minutes":111,"calories":160,"kind":"strength"},{"id":6,"label":"Fri yoga","minutes":50,"calories":615,"kind":"cardio"},{"id":7,"label":"Mon lift","minutes":56,"calories":480,"kind":"strength"},{"id":8,"label":"Sat ride","minutes":99,"calories":838,"kind":"strength"}]);
});

test("with \"strength\", 1", () => {
  expect(bumpCalories(WORKOUTS, "strength", 1)).toEqual([{"id":1,"label":"Wed swim","minutes":22,"calories":240,"kind":"cardio"},{"id":2,"label":"Sun walk","minutes":36,"calories":466,"kind":"mobility"},{"id":3,"label":"Tue swim","minutes":58,"calories":705,"kind":"cardio"},{"id":4,"label":"Wed lift","minutes":26,"calories":126,"kind":"cardio"},{"id":5,"label":"Fri run","minutes":111,"calories":161,"kind":"strength"},{"id":6,"label":"Fri yoga","minutes":50,"calories":605,"kind":"cardio"},{"id":7,"label":"Mon lift","minutes":56,"calories":481,"kind":"strength"},{"id":8,"label":"Sat ride","minutes":99,"calories":839,"kind":"strength"}]);
});
