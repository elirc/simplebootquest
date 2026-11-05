test("stock is added for existing SKUs and new SKUs are inserted", () => {
  expect(query("SELECT sku, stock FROM products WHERE sku IN ('MN-24', 'HB-07', 'WC-01') ORDER BY sku")).toEqual([{"sku": "HB-07", "stock": 10}, {"sku": "MN-24", "stock": 10}, {"sku": "WC-01", "stock": 20}]);
});
test("no duplicate products", () => {
  expect(query("SELECT COUNT(*) AS n FROM products")).toEqual([{"n": 9}]);
});
test('uses ON CONFLICT', () => {
  expect(/on\s+conflict/i.test(code)).toBe(true);
});
