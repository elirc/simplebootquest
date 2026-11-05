// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/orders").send({"code":"Brand new","totalCents":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"code":"Brand new","totalCents":5});
  expect(res.headers.location).toBe("/orders/9");
});

test("missing name", async () => {
  const res = await request(app).post("/orders").send({"totalCents":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid order"});
});

test("negative number", async () => {
  const res = await request(app).post("/orders").send({"code":"x","totalCents":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/orders").send({"code":"x","totalCents":"5"});
  expect(res.status).toBe(400);
});
