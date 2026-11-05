// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = employees.map((x) => ({ ...x }));
  return () => { employees.length = 0; employees.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/employees").send({"name":"Brand new","salary":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Brand new","salary":5});
  expect(res.headers.location).toBe("/employees/9");
});

test("missing name", async () => {
  const res = await request(app).post("/employees").send({"salary":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid employee"});
});

test("negative number", async () => {
  const res = await request(app).post("/employees").send({"name":"x","salary":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/employees").send({"name":"x","salary":"5"});
  expect(res.status).toBe(400);
});
