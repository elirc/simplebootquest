test("with \"UK\"", () => {
  expect(ordersInCountryRanked(ORDERS, "UK")).toEqual(["D-400"]);
});

test("with \"US\"", () => {
  expect(ordersInCountryRanked(ORDERS, "US")).toEqual(["D-401","E-501","A-100","E-500"]);
});

test("with \"DE\"", () => {
  expect(ordersInCountryRanked(ORDERS, "DE")).toEqual(["C-301","C-302","A-102"]);
});
