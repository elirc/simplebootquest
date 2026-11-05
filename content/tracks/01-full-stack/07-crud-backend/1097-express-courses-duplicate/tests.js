// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/courses").send({"title":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"title":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/courses").send({"title":"WEB SECURITY"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Course already exists"});
});
