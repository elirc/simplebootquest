// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("defaults", async () => {
  const res = await request(app).get("/orders");
  expect(res.body).toEqual({"data":["E-500","C-300","A-100"],"meta":{"page":1,"limit":3,"total":8}});
});

test("page 2", async () => {
  const res = await request(app).get("/orders?page=2&limit=2");
  expect(res.body).toEqual({"data":["A-100","C-301"],"meta":{"page":2,"limit":2,"total":8}});
});

test("caps the limit", async () => {
  const res = await request(app).get("/orders?limit=50");
  expect(res.body).toEqual({"data":["E-500","C-300","A-100","C-301","B-201"],"meta":{"page":1,"limit":5,"total":8}});
});

test("bad input", async () => {
  const res = await request(app).get("/orders?page=-1&limit=abc");
  expect(res.body).toEqual({"data":["E-500","C-300","A-100"],"meta":{"page":1,"limit":3,"total":8}});
});
