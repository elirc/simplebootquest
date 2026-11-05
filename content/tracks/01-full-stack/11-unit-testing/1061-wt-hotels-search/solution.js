test("with \"ld\"", () => {
  expect(searchHotels(HOTELS, "ld")).toEqual(["Old Mill"]);
});

test("with \"LD\"", () => {
  expect(searchHotels(HOTELS, "LD")).toEqual(["Old Mill"]);
});

test("with \"  \"", () => {
  expect(searchHotels(HOTELS, "  ")).toEqual(["Sea Breeze","Harbour View","Old Mill","Maple House","Sky Garden","Pine Lodge","Northern Star","The Grand"]);
});

test("with \"zzz\"", () => {
  expect(searchHotels(HOTELS, "zzz")).toEqual([]);
});
