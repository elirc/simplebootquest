test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  carsByYear(CARS);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("all cars", () => {
  expect(carsByYear(CARS)).toEqual(["Civic","Corolla","Golf","Mazda3","Polo","Clio","Ioniq","Leaf"]);
});
