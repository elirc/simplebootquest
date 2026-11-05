test("returns the expected rows", () => {
  expect(result).toEqual([{"name": "Octavia E. Butler"}, {"name": "Ursula K. Le Guin"}]);
});
test('uses EXISTS', () => {
  expect(/exists/i.test(code)).toBe(true);
});
