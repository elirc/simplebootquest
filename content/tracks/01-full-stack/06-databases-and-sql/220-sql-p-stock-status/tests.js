test("returns the expected rows", () => {
  expect(result).toEqual([{"sku": "DK-01", "name": "Laptop Dock", "stock": 0, "status": "out"}, {"sku": "MN-24", "name": "24\" Monitor", "stock": 0, "status": "out"}, {"sku": "MN-27", "name": "27\" Monitor", "stock": 3, "status": "low"}, {"sku": "HB-07", "name": "7-Port Hub", "stock": 4, "status": "low"}]);
});
