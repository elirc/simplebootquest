// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/transactions").send({"reference":"Brand new","amount":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"reference":"Brand new","amount":5});
  expect(res.headers.location).toBe("/transactions/9");
});

test("missing name", async () => {
  const res = await request(app).post("/transactions").send({"amount":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid transaction"});
});

test("negative number", async () => {
  const res = await request(app).post("/transactions").send({"reference":"x","amount":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/transactions").send({"reference":"x","amount":"5"});
  expect(res.status).toBe(400);
});
