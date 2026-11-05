test('does not mutate the input', () => {
  const before = JSON.stringify(WORKOUTS);
  bumpMinutes(WORKOUTS, "cardio", 10);
  expect(JSON.stringify(WORKOUTS)).toBe(before);
});

test("with \"cardio\", 10", () => {
  expect(bumpMinutes(WORKOUTS, "cardio", 10)).toEqual([{"id":1,"label":"Mon lift","minutes":40,"calories":811,"kind":"strength"},{"id":2,"label":"Wed lift","minutes":78,"calories":468,"kind":"mobility"},{"id":3,"label":"Tue run","minutes":19,"calories":774,"kind":"strength"},{"id":4,"label":"Thu ride","minutes":34,"calories":441,"kind":"strength"},{"id":5,"label":"Mon run","minutes":98,"calories":480,"kind":"mobility"},{"id":6,"label":"Wed swim","minutes":92,"calories":620,"kind":"mobility"},{"id":7,"label":"Tue swim","minutes":30,"calories":873,"kind":"cardio"},{"id":8,"label":"Thu yoga","minutes":31,"calories":792,"kind":"strength"}]);
});

test("with \"strength\", 1", () => {
  expect(bumpMinutes(WORKOUTS, "strength", 1)).toEqual([{"id":1,"label":"Mon lift","minutes":41,"calories":811,"kind":"strength"},{"id":2,"label":"Wed lift","minutes":78,"calories":468,"kind":"mobility"},{"id":3,"label":"Tue run","minutes":20,"calories":774,"kind":"strength"},{"id":4,"label":"Thu ride","minutes":35,"calories":441,"kind":"strength"},{"id":5,"label":"Mon run","minutes":98,"calories":480,"kind":"mobility"},{"id":6,"label":"Wed swim","minutes":92,"calories":620,"kind":"mobility"},{"id":7,"label":"Tue swim","minutes":20,"calories":873,"kind":"cardio"},{"id":8,"label":"Thu yoga","minutes":32,"calories":792,"kind":"strength"}]);
});
