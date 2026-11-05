test('does not mutate the input', () => {
  const before = JSON.stringify(CITIES);
  citiesByPopulation(CITIES);
  expect(JSON.stringify(CITIES)).toBe(before);
});

test("all cities", () => {
  expect(citiesByPopulation(CITIES)).toEqual(["Lagos","Oslo","Turin","Austin","Lisbon","Lima","Perth","Seoul"]);
});
