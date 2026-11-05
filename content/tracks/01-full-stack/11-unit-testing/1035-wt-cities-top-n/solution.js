test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  topCitiesByPopulation(CITIES, 1);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("with 1", () => {
  expect(topCitiesByPopulation(CITIES, 1)).toEqual(["Perth"]);
});

test("with 3", () => {
  expect(topCitiesByPopulation(CITIES, 3)).toEqual(["Perth","Turin","Accra"]);
});

test("with 0", () => {
  expect(topCitiesByPopulation(CITIES, 0)).toEqual([]);
});
