test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  topHotelsByNightlyPrice(HOTELS, 1);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("with 1", () => {
  expect(topHotelsByNightlyPrice(HOTELS, 1)).toEqual(["Cityloft"]);
});

test("with 3", () => {
  expect(topHotelsByNightlyPrice(HOTELS, 3)).toEqual(["Cityloft","Pine Lodge","Station Hotel"]);
});

test("with 0", () => {
  expect(topHotelsByNightlyPrice(HOTELS, 0)).toEqual([]);
});
