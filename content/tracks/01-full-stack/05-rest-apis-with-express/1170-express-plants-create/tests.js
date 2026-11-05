// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/plants").send({"name":"Brand new","waterEveryDays":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","waterEveryDays":5});
  expect(res.headers.location).toBe("/plants/9");
});

test("missing name", async () => {
  const res = await request(app).post("/plants").send({"waterEveryDays":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid plant"});
});

test("negative number", async () => {
  const res = await request(app).post("/plants").send({"name":"x","waterEveryDays":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/plants").send({"name":"x","waterEveryDays":"5"});
  expect(res.status).toBe(400);
});
