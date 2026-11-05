// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/tickets").send({"subject":"Brand new","replies":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"subject":"Brand new","replies":5});
  expect(res.headers.location).toBe("/tickets/9");
});

test("missing name", async () => {
  const res = await request(app).post("/tickets").send({"replies":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid ticket"});
});

test("negative number", async () => {
  const res = await request(app).post("/tickets").send({"subject":"x","replies":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/tickets").send({"subject":"x","replies":"5"});
  expect(res.status).toBe(400);
});
