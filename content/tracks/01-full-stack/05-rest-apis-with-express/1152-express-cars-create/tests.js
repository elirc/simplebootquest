// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/cars").send({"model":"Brand new","km":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"model":"Brand new","km":5});
  expect(res.headers.location).toBe("/cars/9");
});

test("missing name", async () => {
  const res = await request(app).post("/cars").send({"km":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid car"});
});

test("negative number", async () => {
  const res = await request(app).post("/cars").send({"model":"x","km":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/cars").send({"model":"x","km":"5"});
  expect(res.status).toBe(400);
});
