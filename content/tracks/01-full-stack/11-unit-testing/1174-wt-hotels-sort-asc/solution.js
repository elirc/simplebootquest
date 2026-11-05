test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  hotelsByNightlyPrice(HOTELS);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("all hotels", () => {
  expect(hotelsByNightlyPrice(HOTELS)).toEqual(["Sky Garden","Riverside Inn","The Grand","Station Hotel","Pine Lodge","Sea Breeze","Cityloft","Harbour View"]);
});
