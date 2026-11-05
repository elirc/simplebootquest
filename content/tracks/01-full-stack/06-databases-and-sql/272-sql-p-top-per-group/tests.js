test("returns the expected rows", () => {
  expect(result).toEqual([{"author": "Chimamanda Ngozi Adichie", "title": "Americanah", "pages": 588}, {"author": "Haruki Murakami", "title": "Kafka on the Shore", "pages": 505}, {"author": "Octavia E. Butler", "title": "Parable of the Sower", "pages": 345}, {"author": "Terry Pratchett", "title": "Guards! Guards!", "pages": 416}, {"author": "Ursula K. Le Guin", "title": "The Dispossessed", "pages": 387}]);
});
test('uses a window function', () => {
  expect(/over\s*\(/i.test(code)).toBe(true);
});
