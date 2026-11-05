// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/transactions");
  expect(res.body).toEqual({"data":["TX-06","TX-10","TX-08"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/transactions?page=2&limit=2");
  expect(res.body).toEqual({"data":["TX-08","TX-11"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/transactions?limit=50");
  expect(res.body).toEqual({"data":["TX-06","TX-10","TX-08","TX-11","TX-07"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/transactions?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["TX-06","TX-10","TX-08"],"meta":{"page":1,"limit":3,"total":8}});
});
