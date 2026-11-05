test("only unreferenced, out-of-stock products are gone", () => {
  expect(query("SELECT sku FROM products ORDER BY id")).toEqual([{"sku": "KB-01"}, {"sku": "MS-01"}, {"sku": "MN-27"}, {"sku": "CB-C"}, {"sku": "HB-07"}, {"sku": "HS-01"}]);
});
test("order items are untouched", () => {
  expect(query("SELECT COUNT(*) AS n FROM order_items")).toEqual([{"n": 17}]);
});
