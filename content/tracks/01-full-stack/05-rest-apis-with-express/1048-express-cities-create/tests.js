// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/cities").send({"name":"Brand new","population":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","population":5});
  expect(res.headers.location).toBe("/cities/9");
});

test("missing name", async () => {
  const res = await request(app).post("/cities").send({"population":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid city"});
});

test("negative number", async () => {
  const res = await request(app).post("/cities").send({"name":"x","population":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/cities").send({"name":"x","population":"5"});
  expect(res.status).toBe(400);
});
